interface NextFetchRequestConfig {
  tags: string[];
  // Add other Next.js-specific properties if needed
}

interface RequestOptions {
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  headers?: { [key: string]: string };
  body?: any;
  next?: NextFetchRequestConfig;
}

interface ApiResponse<T> {
  code: "success" | "error";
  data?: T;
  error?: any;
}

const BASE_URL = process.env.SERVER_URL || "http://localhost:5001";

const defaultHeaders = {
  "Content-Type": "application/json",
  // Add other common headers as needed
};

export const requestHandler = async <T>(
  route: string,
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH",
  options?: Partial<RequestOptions>
): Promise<ApiResponse<T>> => {
  const url = `${BASE_URL}${route}`;

  const requestOptions: RequestOptions = {
    method,
    headers: { ...defaultHeaders },
    next: options?.next,
  };

  if (method !== "GET") {
    requestOptions.body = JSON.stringify(options?.body);
  }

  if (options?.headers) {
    requestOptions.headers = { ...requestOptions.headers, ...options.headers };
  }

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return { code: "success", data };
  } catch (error) {
    return { code: "error", error };
  }
};
