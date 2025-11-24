import { getDefaultHeadersWithAuth } from "../utils";
import { request } from "./http";

export const ExampleService = {
  // GET /posts
  getPosts: () => request("/v1/post/getAll", { method: "POST" }),

  // GET /posts/:id
  getPostByID: (_id) =>
    request(`/v1/post/getById`, { method: "POST", body: { _id } }),

  // POST /posts
  createPost: (payload) =>
    request("/v1/post/create", {
      method: "POST",
      body: payload,
      headers: {
        ...getDefaultHeadersWithAuth().headers,
      },
    }),

  getTypes: () => request("/v1/post/getTypes", { method: "POST" }),

  uploadImage: (formData) => {
    console.log("🚀 ~ uploadImage called", formData);
    return request("/v1/post/uploadImage", {
      method: "POST",
      body: formData,
      headers: {
        ...getDefaultHeadersWithAuth().headers,
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default ExampleService;
