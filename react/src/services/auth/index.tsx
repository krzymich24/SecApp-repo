import { SignInResponse, SignUpResponse } from "./models";

import { api } from "../../config";

export const AuthService = {
  login: async (username: string, password: string) => {
    return await api
      .post<SignInResponse>("login/", { username, password })
      .then((response) => response.data);
  },
  register: async (username: string, password: string) => {
    return await api
      .post<SignUpResponse>("register/", { username, password })
      .then((response) => response.data);
  },
};
