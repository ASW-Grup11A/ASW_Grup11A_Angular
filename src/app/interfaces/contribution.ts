export interface Contribution {
  id: number;
  user_id: string;
  title: string;
  url?: string;
  text?: string;
  publication_time: string;
  comments: number;
  points: number;
  hidden: number;
  liked: boolean;
  show: boolean;
  contribution_title: string;
}
