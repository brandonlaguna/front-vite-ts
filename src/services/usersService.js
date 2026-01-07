import { getDefaultHeadersWithAuth } from "../utils";
import { request } from "./http";

export const UsersService = {
  // GET /posts
  getUsersByType: (payload = {}) =>
    request("/v1/users/getUsers", { method: "POST", body: payload }),
};

export default UsersService;
