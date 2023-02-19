import axios from "axios";

export function capitalizeString(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function fetcher(url: string) {
  return axios.get(url).then((res) => res.data);
}
