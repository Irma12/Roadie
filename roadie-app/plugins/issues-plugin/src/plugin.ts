import { createPlugin, createRoutableExtension } from '@backstage/core';

import { rootRouteRef } from './routes';

export const issuesPluginPlugin = createPlugin({
  id: 'issues-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const IssuesPluginPage = issuesPluginPlugin.provide(
  createRoutableExtension({
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
