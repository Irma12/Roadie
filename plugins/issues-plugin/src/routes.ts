import { createRouteRef } from '@backstage/core';

export const rootRouteRef = createRouteRef({
  path: '/issues-plugin',
  title: 'Issues Plugin',
});

export const issueRouteRef = createRouteRef({
  path: '/issues-plugin/issue',
  title: 'Issues for project',
});
