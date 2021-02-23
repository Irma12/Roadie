import {
  createApiFactory,
  createPlugin,
  createRoutableExtension
} from '@backstage/core';
import { issuesApiRef, IssuesClient } from './api';
import { LandingPage } from './components/LandingPage';
import { rootRouteRef, issueRouteRef } from './routes';

export const issuesPluginPlugin = createPlugin({
  id: 'issues-plugin',
  routes: {
    root: rootRouteRef,
    issue: issueRouteRef
  },
  apis: [createApiFactory(issuesApiRef, new IssuesClient())]
});

export const IssuesPluginPage = issuesPluginPlugin.provide(
  createRoutableExtension({
    component: () =>
      import('./components/LandingPage').then(m => m.LandingPage),
    mountPoint: rootRouteRef,
  }),
);
