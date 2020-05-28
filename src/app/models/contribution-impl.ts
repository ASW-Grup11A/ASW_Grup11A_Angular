import {Contribution} from '../interfaces/contribution';

export class ContributionImpl implements Contribution{
  comments: number;
  hidden: number;
  id: number;
  liked: boolean;
  points: number;
  // tslint:disable-next-line:variable-name
  publication_time: string;
  show: boolean;
  // tslint:disable-next-line:variable-name
  user_id: string;
  text: string;
  title: string;
  url: string;

  constructor(title: string, url: string, text: string) {
    this.text = text;
    this.title = title;
    this.url = url;
  }
}
