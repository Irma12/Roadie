import { Entity } from '@backstage/catalog-model';

export const PROJECT_ID = 'projectId';

export const useProjectId= (entity: Entity) => {
  return entity?.metadata.annotations?.[PROJECT_ID] ?? '';
};