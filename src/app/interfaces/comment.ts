import {Contribution} from "./contribution";

export interface Comment extends Contribution {
  contribution: number;
  parent?: number;
  comments_list?: Comment[];
}
