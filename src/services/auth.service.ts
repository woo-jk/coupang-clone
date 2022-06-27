import api from "./api";
import cookies from "js-cookie";

type SignupAgreements = {
  privacy: boolean;
  ad:
    | {
        email: boolean;
        sms: boolean;
        app: boolean;
      }
    | false;
};

class AuthService {
  setAccessToken(accessToken: string) {
    cookies.set("accessToken", accessToken, { expires: 1 });
  }
  setRefreshToken(refreshToken: string) {
    cookies.set("refreshToken", refreshToken, { expires: 7 });
  }

  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken = cookies.get("refreshToken");
    if (!refreshToken) return;

    api.defaults.headers.common["Authorization"] = `Bearer ${refreshToken}`;
    const { data } = await api.post("/auth/refresh", null);

    this.setAccessToken(data.access);
    this.setRefreshToken(data.refresh);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    agreements: SignupAgreements
  ) {
    const { data } = await api.post("/auth/signup", {
      email,
      password,
      name,
      phoneNumber,
      agreements,
    });

    this.setAccessToken(data.access);
    this.setRefreshToken(data.refresh);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(email: string, password: string) {
    const { data } = await api.post("/auth/login", { email, password });

    this.setAccessToken(data.access);
    this.setRefreshToken(data.refresh);
  }
}

export default new AuthService();
