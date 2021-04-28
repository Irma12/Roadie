
export type Issue = {
    title: string;
    id: string;
    resolved: Boolean;
    description: string;
  };
  
  export type Comment = {
    issueId: string;
    id: string;
    email: string;
    text: string;
  };
  