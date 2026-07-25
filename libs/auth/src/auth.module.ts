import { Module } from '@nestjs/common';
import { DATABASE_CLIENT, createDatabaseModule } from '@socializ/core-database';

import { createCommunityAuthModule } from './community-auth.module';
import {
  enterpriseAuthModuleFactory,
  enterpriseLicenseModuleFactory,
} from './enterprise-auth.generated';

const databaseModule = createDatabaseModule();
const authModule = enterpriseAuthModuleFactory
  ? enterpriseAuthModuleFactory({
      databaseModule,
      databaseToken: DATABASE_CLIENT,
    })
  : createCommunityAuthModule({
      databaseModule,
      databaseToken: DATABASE_CLIENT,
    });
const enterpriseLicenseModule = enterpriseLicenseModuleFactory?.();

@Module({
  imports: [
    authModule,
    ...(enterpriseLicenseModule ? [enterpriseLicenseModule] : []),
  ],
})
export class SocializAuthModule {}
