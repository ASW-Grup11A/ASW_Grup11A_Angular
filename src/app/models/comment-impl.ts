import {Comment} from '../interfaces/comment';

export class CommentImpl implements Comment{
  comments: number;
  // tslint:disable-next-line:variable-name
  comments_list: Comment[];
  contribution: number;
  hidden: number;
  id: number;
  liked: boolean;
  parent: number;
  points: number;
  // tslint:disable-next-line:variable-name
  publication_time: string;
  show: boolean;
  text: string;
  title: string;
  url: string;
  // tslint:disable-next-line:variable-name
  user_id: string;


  constructor(text: string) {
    this.text = text;
  }
}
