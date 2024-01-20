export enum UserCapabilities {
  CAP_AUTHOR = 1,
  CAP_ORGANIZER = 2,
  CAP_PARTICIPANT = 3,
}

export interface UserProfile {
  id: number;
  username?: string;
  capabilities: UserCapabilities[];
}
