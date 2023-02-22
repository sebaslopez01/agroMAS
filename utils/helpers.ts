import axios from "axios";
import { removeCookies } from "cookies-next";
import { NextRouter } from "next/router";

export function capitalizeString(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getFetcher(url: string) {
  return axios.get(url).then((res) => res.data);
}

export function postFetcher(url: string, { arg }: any) {
  return axios.post(url, arg).then((res) => res.data);
}

export function signout(router: NextRouter) {
  removeCookies("token");
  router.push("/");
}
