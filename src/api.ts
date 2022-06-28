import axios from "axios";
import { ISignUpData, ILoginData } from "./types/service";

export const refresh = (refreshToken: string) =>
  axios.post(process.env.NEXT_PUBLIC_API_HOST + "/auth/refresh", null, {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
export const signUp = (signUpData: ISignUpData) =>
  axios.post(process.env.NEXT_PUBLIC_API_HOST + "/auth/signup", signUpData);
export const login = (loginData: ILoginData) =>
  axios.post(process.env.NEXT_PUBLIC_API_HOST + "/auth/login", loginData);
export const getMyData = (accessToken: string) =>
  axios.get(process.env.NEXT_PUBLIC_API_HOST + "/users/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
export const getReadData = (id: number) =>
  axios.get(process.env.NEXT_PUBLIC_API_HOST + "/users/" + id);
