export interface Contribution {
  id: number;
  userId: string;
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
