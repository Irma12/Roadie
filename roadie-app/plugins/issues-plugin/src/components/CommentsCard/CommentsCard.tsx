import React from 'react';
import { Box, Typography } from '@material-ui/core';

export const CommentInfo = ({ comment }) => (
  <Box mb={2}>
    <Typography>Email: {comment.email}</Typography>
    <Typography>Text: {comment.text}</Typography>
    <Typography>Id: {comment.id}</Typography>
    <Typography>IssueId: {comment.issueId}</Typography>
  </Box>
);

export const CommentsCard = ({ comments }) => (
  <Box display="flex">
    <Box display="flex" justifyContent="center" flexDirection="column">
      {comments.map((comment, i) => {
        return <CommentInfo key={i} comment={comment} />;
      })}
    </Box>
  </Box>
);
