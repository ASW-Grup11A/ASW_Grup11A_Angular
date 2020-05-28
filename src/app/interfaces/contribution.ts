export interface Contribution {
  id: number;
  user: string;
  title: string;
  url?: string;
  text?: string;
  publicationTime: string;
  comments: number;
  points: number;
  hidden: number;
  liked: boolean;
  show: boolean;
}
