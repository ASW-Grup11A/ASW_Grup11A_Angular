import {Contribution} from '../interfaces/contribution';

export class ContributionImpl implements Contribution{
  comments: number;
  hidden: number;
  id: number;
  liked: boolean;
  points: number;
  publicationTime: string;
  show: boolean;
  user: string;
  text: string;
  title: string;
  url: string;


  constructor(title: string, url: string, text: string) {
    this.text = text;
    this.title = title;
    this.url = url;
  }
}
