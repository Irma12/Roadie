import React from 'react';
import { Grid,Box } from '@material-ui/core';
import { Entity } from '@backstage/catalog-model';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  SupportButton,
  Progress,
  useApi
} from '@backstage/core';
import Alert from '@material-ui/lab/Alert';
import { issuesApiRef } from '../../api';
import { useAsync } from 'react-use';
import { IssuesListPage } from '../IssuesListPage';
import { ProjectDetailsCard} from '../ProjectDetailsCard';

export const ProjectOverviewComponent = ({ entity }: { entity: Entity }) => {
  const api = useApi(issuesApiRef);
  const { loading, error, value } = useAsync(() => 
  api.getIssues(entity?.metadata.annotations.projectId));

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return (
  <Page themeId="tool">
    <Header title="Welcome to project issues preview plugin!" subtitle="This plugin provides overview of the project issues." />
    <Content>
      <ContentHeader title="Issues plugin">
        <SupportButton>This plugin provides overview of all issues.</SupportButton>
      </ContentHeader>
      <Grid container spacing={2} direction="column">
        <Grid item xs={4}>
          <InfoCard title="Project summary">
            <ProjectDetailsCard issues={value || []}/>
          </InfoCard>
        </Grid>
        <Grid item>
          <IssuesListPage issues={value || []} />
        </Grid>
      </Grid>
    </Content>
  </Page>
  );
}
