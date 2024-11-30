export const fetchWithParams = (url: string, params: Record<string, any>) => {
  const queryString = new URLSearchParams(params).toString();
  return fetch(`${url}?${queryString}`);
};
