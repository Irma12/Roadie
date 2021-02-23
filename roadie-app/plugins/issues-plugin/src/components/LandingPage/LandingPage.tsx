import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PROJECT_ID } from '../../hooks/useProjectId';
import { MissingAnnotationEmptyState } from '@backstage/core';
import { ProjectOverviewComponent } from '../ProjectOverviewComponent';
import { IssueDetailsPage } from '../IssueDetailsPage';

export const isProjectIdProvided = (entity: Entity) =>
  Boolean(entity?.metadata.annotations?.[PROJECT_ID]);

export const LandingPage = ({ entity }: { entity: Entity }) => {
  return !isProjectIdProvided(entity) ? (
    <MissingAnnotationEmptyState annotation={PROJECT_ID} />
  ) : (
    <Routes>
      <Route path="/" element={<ProjectOverviewComponent entity={entity}/>} />
      <Route path="/issue" element={<IssueDetailsPage />} />
    </Routes>
  );
};
