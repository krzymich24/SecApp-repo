import { UserCapabilities } from "../../types/user";

export interface SignInResponse {
  uid: number;
  capabilities: UserCapabilities[];
}

export interface SignUpResponse {
  uid: number;
  capabilities: UserCapabilities[];
}
