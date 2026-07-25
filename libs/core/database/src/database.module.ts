import { DynamicModule, Module, Provider } from '@nestjs/common';

import { prisma } from './prisma';

export const DATABASE_CLIENT = Symbol('DATABASE_CLIENT');

const databaseClientProvider: Provider = {
  provide: DATABASE_CLIENT,
  useValue: prisma,
};

@Module({
  providers: [databaseClientProvider],
  exports: [DATABASE_CLIENT],
})
class DatabaseModule {}

export function createDatabaseModule(): DynamicModule {
  return {
    module: DatabaseModule,
  };
}
