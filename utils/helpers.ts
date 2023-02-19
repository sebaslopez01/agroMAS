import axios from "axios";

export function capitalizeString(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getFetcher(url: string) {
  return axios.get(url).then((res) => res.data);
}

export function postFetcher(url: string, data: any) {
  return axios.post(url, data).then((res) => res.data);
}
