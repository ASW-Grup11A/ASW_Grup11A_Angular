import {Contribution} from "./contribution";

export interface Comment extends Contribution {
  contributionId: number;
  parentId?: number;
}
