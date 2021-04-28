import React from 'react';
import {
  Content,
  Header,
  Page,
  useApi,
  Progress,
  InfoCard,
} from '@backstage/core';
import {
  LinearProgress,
  Typography,
  Box,
  Grid,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useAsync } from 'react-use';
import { issuesApiRef } from '../../api';
import { CommentsCard } from '../CommentsCard';

const DetailsPage = () => {
  const api = useApi(issuesApiRef);

  const { loading, error, value } = useAsync(() =>
    api.getIssueDetails(
      decodeURIComponent(location.search.split('issueId=')[1]),
    ),
  );

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return (
    <>
      <Box>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h6">Title</Typography>
            <Typography>{value.title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Description</Typography>
            <Typography>{value.description}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Resolved</Typography>
            <Typography>{value.resolved === 'true' ? 'Yes' : 'No'}</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const CommentsPage = () => {
  const api = useApi(issuesApiRef);

  const { loading, error, value: comments } = useAsync(() =>
    api.getIssueComments(
      decodeURIComponent(location.search.split('issueId=')[1]),
    ),
  );

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return (
    <Grid item xs={4}>
      <InfoCard title="Comments">
        <CommentsCard comments={comments || []} />
      </InfoCard>
    </Grid>
  );
};

export const IssueDetailsPage = () => (
  <Page themeId="tool">
    <Header title="Issue Details" type="other" />
    <Content>
      <Box display="flex" justifyContent="space-between">
        <DetailsPage />
        <CommentsPage />
      </Box>
    </Content>
  </Page>
);
