const baseUrl = "https://dummyjson.com/";

export const GET = (type, id = "") => {
  return fetch(baseUrl + type + id).then(res => res.json());
};
