import {Contribution} from '../interfaces/contribution';

export class ContributionImpl implements Contribution{
  comments: number;
  hidden: number;
  id: number;
  liked: boolean;
  points: number;
  publication_time: string;
  show: boolean;
  user_id: string;
  text: string;
  title: string;
  url: string;
  contribution_title: string;


  constructor(title: string, url: string, text: string) {
    this.text = text;
    this.title = title;
    this.url = url;
  }
}
