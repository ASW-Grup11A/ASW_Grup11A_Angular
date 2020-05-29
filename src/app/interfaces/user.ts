
export interface User {
  username: string; // id
  date_joined: string;
  karma: number;
  about: string;
  email?: string;
  showdead?: boolean;
  noprocrast?: boolean;
  maxvisit?: number;
  minaway?: number;
  delay?: number;
}
