import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { issuesPluginPlugin, IssuesPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(issuesPluginPlugin)
  .addPage({
    element: <IssuesPluginPage />,
    title: 'Root Page',
  })
  .render();
