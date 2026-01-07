import { getDefaultHeadersWithAuth } from "../utils";
import { request } from "./http";

export const AuthService = {
  // GET /posts
  login: (payload) =>
    request("/v1/auth/login", { method: "POST", body: payload }),
};

export default AuthService;
