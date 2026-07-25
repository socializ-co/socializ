import type { DynamicModule } from '@nestjs/common';

export type AuthModuleFactoryOptions = {
  databaseModule: DynamicModule;
  databaseToken: symbol;
};

/**
 * Public contract between the community API and the optional private auth
 * provider. The enterprise implementation is injected at build time.
 */
export type AuthModuleFactory = (
  options: AuthModuleFactoryOptions,
) => DynamicModule;
