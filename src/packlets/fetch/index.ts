export const fetch = async (
  input: string,
  options?: RequestInit
): Promise<Response> =>
  window.fetch(new URL(input, 'http://localhost:3001'), {
    ...options,
    headers: {
      ...options?.headers,
      Accept: 'application/json',
    },
  })
