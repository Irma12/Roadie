import { createApiRef } from '@backstage/core';
import { Issue, Comment } from './types';

export const issuesApiRef = createApiRef<Api>({
  id: 'plugin.issues.service',
});