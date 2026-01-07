import { getDefaultHeadersWithAuth } from "../utils";
import { request } from "./http";

export const ProductsService = {
  // GET /posts
  getAll: (payload) =>
    request("/v1/products/getAll", { method: "POST", body: payload }),
  getById: (_id) =>
    request("/v1/products/getById", { method: "POST", body: { _id } }),
};

export default ProductsService;
