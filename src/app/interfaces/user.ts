
export interface User {
  username: string;
  dateJoined: string;
  karma: number;
  about: string;
  email?: string;
  showDead?: boolean;
  noProCast?: boolean;
  maxVisit?: number;
  minAway?: number;
  delay?: number;
}
