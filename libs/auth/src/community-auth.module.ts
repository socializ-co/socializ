import { DynamicModule, Module } from '@nestjs/common';
import { AuthModule as BetterAuthModule } from '@thallesp/nestjs-better-auth';

import { createCommunityAuth } from './community-auth';
import type { AuthModuleFactoryOptions } from './contracts/auth-provider';

@Module({})
class CommunityAuthModule {}

export function createCommunityAuthModule({
  databaseModule,
  databaseToken,
}: AuthModuleFactoryOptions): DynamicModule {
  return {
    module: CommunityAuthModule,
    imports: [
      databaseModule,
      BetterAuthModule.forRootAsync({
        imports: [databaseModule],
        inject: [databaseToken],
        useFactory: (database) => ({
          auth: createCommunityAuth({ database }),
          bodyParser: {
            json: { limit: '2mb' },
            urlencoded: { limit: '2mb', extended: true },
          },
        }),
      }),
    ],
    exports: [BetterAuthModule],
  };
}
