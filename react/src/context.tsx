import { Dispatch, SetStateAction } from "react";

import { UserProfile } from "./types/user";
import { createContext } from "react";

export const AuthContext = createContext<
  [UserProfile | null, Dispatch<SetStateAction<UserProfile | null>>]
>([null, () => {}]);
