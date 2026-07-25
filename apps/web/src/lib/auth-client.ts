import { createAuthClient } from 'better-auth/react';
import { organizationClient } from 'better-auth/client/plugins';

import { editionConfig } from './edition';

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001',
  basePath: '/api/auth',
  plugins: editionConfig.isCommunity ? [] : [organizationClient()],
});
