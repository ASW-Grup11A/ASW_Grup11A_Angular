
export interface User {
  id: string; // username
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
