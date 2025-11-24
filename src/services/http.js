const API_BASE = process.env.NEXT_PUBLIC_BACKEND_API_URL || "";

export async function request(path, options = {}) {
  console.log("🚀 ~ API_BASE:", API_BASE);
  const { method = "GET", body, headers = {}, ...rest } = options;
  const url = API_BASE + path;

  const fetchOptions = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...rest,
  };

  if (body != null) {
    fetchOptions.body = JSON.stringify(body);
  }

  const res = await fetch(url, fetchOptions);
  const contentType = res.headers.get("content-type") || "";

  const data = contentType.includes("application/json")
    ? await res.json()
    : await res.text();

  if (!res.ok) {
    const error = new Error(
      data?.message || res.statusText || "Request failed"
    );
    error.status = res.status;
    error.data = data;
    throw error;
  }

  return data;
}

export default request;
