import React from 'react';
import {
  Link,
  Table,
  StatusOK,
  StatusError,
} from '@backstage/core';
import { Box, Typography } from '@material-ui/core';
import { issuesApiRef, Issue } from '../../api';

type IssuesTableProps = {
  issues: Issue[];
};

const getStatusComponent = (status: string | undefined = '') => {
  switch (status) {
    case 'false':
      return <StatusError />;
    case 'true':
      return <StatusOK />;
    default:
      return <StatusOK />;
  }
};

export const IssuesTable = ({ issues }: IssuesTableProps) => {
  const columns: TableColumn[] = [
    { title: 'Id', field: 'id' },
    { title: 'Title', field: 'title' },
    { title: 'Description', field: 'description' },
    {
      title: 'Resolved',
      field: 'resolved',
      render: (row: Partial<TableData>) => (
        <Box display="flex" alignItems="center">
          {getStatusComponent(row.resolved)}
          <Box mr={1} />
          <Typography variant="button">{row.resolved}</Typography>
        </Box>
      ),
    },
    {
      title: 'View details',
      field: 'id',
      render: (row: Partial<TableData>) => (
        <Box display="flex" alignItems="center">
          <Box mr={1} />
            <Link to={`issue?issueId=${encodeURIComponent(
              row.id,
            )}`}>
            <Typography color="primary">View details</Typography>
          </Link>
        </Box>
      ),
    },
  ];

  const data = issues.map(issue => {
    return {
      id: `${issue.id}`,
      title: `${issue.title}`,
      description: `${issue.description}`,
      resolved: `${issue.resolved}`,
    };
  });

  return (
    <Table
      title="All issues"
      options={{ search: true, paging: false }}
      columns={columns}
      data={data}
    />
  );
};

export const IssuesListPage = ({ issues }) => {
  return <IssuesTable issues={issues} />;
};
