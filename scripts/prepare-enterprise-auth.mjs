import {
  existsSync,
  mkdirSync,
  symlinkSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const workspaceRoot = dirname(scriptDirectory);
const generatedFile = join(
  workspaceRoot,
  'libs/auth/src/enterprise-auth.generated.ts',
);
const enterpriseRoot = resolve(
  workspaceRoot,
  process.env.SOCIALIZ_ENTERPRISE_SOURCE ?? 'enterprise',
);
const tscBinary = join(workspaceRoot, 'node_modules/.bin/tsc');
const enterprisePackages = [
  {
    name: 'auth',
    directory: join(enterpriseRoot, 'packages/auth'),
    variable: 'auth',
  },
  {
    name: 'license',
    directory: join(enterpriseRoot, 'packages/license'),
    variable: 'license',
  },
].map((enterprisePackage) => ({
  ...enterprisePackage,
  entry: join(enterprisePackage.directory, 'src/index.ts'),
  distEntry: join(enterprisePackage.directory, 'dist/index.js'),
}));

mkdirSync(dirname(generatedFile), { recursive: true });

function buildEnterprisePackage(enterprisePackage) {
  const packageNodeModules = join(enterprisePackage.directory, 'node_modules');
  const usesTemporaryNodeModules = !existsSync(packageNodeModules);

  if (usesTemporaryNodeModules) {
    symlinkSync(join(workspaceRoot, 'node_modules'), packageNodeModules, 'dir');
  }

  try {
    execFileSync(
      tscBinary,
      ['-p', join(enterprisePackage.directory, 'tsconfig.json')],
      {
        cwd: workspaceRoot,
        stdio: 'inherit',
      },
    );
  } finally {
    if (usesTemporaryNodeModules) {
      unlinkSync(packageNodeModules);
    }
  }
}

const availablePackages = enterprisePackages.filter((enterprisePackage) =>
  existsSync(enterprisePackage.entry),
);

for (const enterprisePackage of availablePackages) {
  buildEnterprisePackage(enterprisePackage);
}

function getGeneratedImport(enterprisePackage) {
  const modulePath = relative(
    dirname(generatedFile),
    enterprisePackage.distEntry,
  )
    .split(sep)
    .join('/');

  return modulePath.startsWith('.') ? modulePath : `./${modulePath}`;
}

const packageImports = availablePackages
  .map(
    (enterprisePackage) =>
      `const ${enterprisePackage.variable}Package = require('${getGeneratedImport(enterprisePackage)}');`,
  )
  .join('\n');

const hasAuthPackage = availablePackages.some(({ name }) => name === 'auth');
const hasLicensePackage = availablePackages.some(
  ({ name }) => name === 'license',
);
const packageExports = `export const enterpriseAuthModuleFactory: AuthModuleFactory | null =
  ${hasAuthPackage ? 'authPackage.createEnterpriseAuthModule ?? null' : 'null'};

export const enterpriseLicenseModuleFactory: EnterpriseModuleFactory | null =
  ${hasLicensePackage ? 'licensePackage.createLicenseModule ?? null' : 'null'};`;

const source = `import type { DynamicModule } from '@nestjs/common';
import type { AuthModuleFactory } from './contracts/auth-provider';

type EnterpriseModuleFactory = () => DynamicModule;

${packageImports}

${packageExports}

`;

writeFileSync(generatedFile, source);
console.log(
  availablePackages.length > 0
    ? `Enterprise packages built: ${availablePackages.map(({ name }) => name).join(', ')}.`
    : 'Enterprise packages unavailable; using Community Edition modules.',
);
