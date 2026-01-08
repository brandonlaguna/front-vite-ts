import { getDefaultHeadersWithAuth } from "../utils";
import { request } from "./http";

export const FormService = {
  // GET /posts
  getInTouch: (payload) =>
    request("/v1/email/getInTouch", { method: "POST", body: payload }),
  subscribeNewsLetter: (payload) =>
    request("/v1/email/subscribeNewsLetter", { method: "POST", body: payload }),
};

export default FormService;
