import { IssuesApi } from './IssuesApi';
import { Issue, Comment } from './types';

const BASE_URL =
  'https://my-json-server.typicode.com/RoadieHQ/test-data-api';

export class IssuesClient implements IssuesApi {
  async getIssues(projectId: string): Promise<Issue> {
    const url = `${BASE_URL}/projects/${projectId}/issues`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Get request failed to ${url} with ${response.status} ${response.statusText}`,
      );
    }

    return await response.json();
  }

  async getIssueDetails(issueId: string): Promise<Issue> {
    const url = `${BASE_URL}/issues/${issueId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Get request failed to ${url} with ${response.status} ${response.statusText}`,
      );
    }

    return await response.json();
  }

  async getIssueComments(issueId: string): Promise<Comment> {
    const url = `${BASE_URL}/issues/${issueId}/comments`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Get request failed to ${url} with ${response.status} ${response.statusText}`,
      );
    }

    return await response.json();
  }
}
