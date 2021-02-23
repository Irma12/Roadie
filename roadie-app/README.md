# Project issues plugin
This plugin provides overview of all project issues, and also details for specific issue.

<img src="https://github.com/Irma12/Roadie/blob/main/roadie-app/plugins/images/Overview-first.png" width="550px" height="400px">

## Features
- List all issues for the project
- Displays details about the issue

## Steps to run plugin
- Export plugin from the list of plugins from _packages/app/src/plugins.ts_
```
export { issuesPluginPlugin } from '@internal/plugin-issues-plugin'
```
- Import plugin in _packages/app/src/components/catalog/EntityPage.tsx_
```
 import { IssuesPluginPage } from '@internal/plugin-issues-plugin'`
 const ServiceEntityPage = ({ entity }: { entity: Entity }) => (
  <EntityPageLayout>
   ...
    <EntityPageLayout.Content
      path="/ci-cd/*"
      title="CI/CD"
      element={<CICDSwitcher entity={entity} />}
      ...
    />
    
  ```

- Add annotation to the **yaml config file** of a component.

![alt text](https://github.com/Irma12/Roadie/blob/main/roadie-app/plugins/images/Annotations.png?raw=true)

## How to run plugin
1. Go to http://localhost:3000/
2. Click "Create Component"
3. Click "Register Existing Component"
4. Enter a link to a public catalog info file 
  https://github.com/Irma12/Roadie/blob/main/roadie-app/catalog-info.yaml

Issues tab should be visible in component.
Overview and project issue information is on the first page, and clicking on an issue will lead you to issue details page.

<img src="https://github.com/Irma12/Roadie/blob/main/roadie-app/plugins/images/IssueDetails.png" width="650px" height="400px">

