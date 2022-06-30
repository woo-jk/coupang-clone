import Service from "./service";
import cookies from "js-cookie";
import { refresh, signUp, login } from "../api";
import { ISignUpData, ILoginData } from "../types/service";

class AuthService extends Service {
  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken = cookies.get("refreshToken");
    if (!refreshToken) return;

    const { data } = await refresh(refreshToken);

    this.setAccessToken(data.access);
    this.setRefreshToken(data.refresh);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(signUpData: ISignUpData) {
    const { data } = await signUp(signUpData);

    this.setAccessToken(data.access);
    this.setRefreshToken(data.refresh);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(loginData: ILoginData) {
    const { data } = await login(loginData);

    this.setAccessToken(data.access);
    this.setRefreshToken(data.refresh);
  }
}

export default new AuthService();
