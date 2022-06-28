import axios from "axios";
import cookies from "js-cookie";

class Service {
  setAccessToken(accessToken: string) {
    cookies.set("accessToken", accessToken, { expires: 1 });
  }
  setRefreshToken(refreshToken: string) {
    cookies.set("refreshToken", refreshToken, { expires: 7 });
  }
  apiCreate() {
    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
    });
  }
}

export default Service;
