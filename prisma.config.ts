import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'libs/core/database/prisma/schema.prisma',
  migrations: {
    path: 'libs/core/database/prisma/migrations',
  },
  datasource: {
    url:
      process.env.DATABASE_URL ??
      'postgresql://socializ:socializ@localhost:5432/socializ',
  },
});
