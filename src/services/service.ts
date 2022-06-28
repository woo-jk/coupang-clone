import axios from "axios";
import cookies from "js-cookie";

class Service {
  setAccessToken(accessToken: string) {
    cookies.set("accessToken", accessToken, { expires: 1 });
  }
  setRefreshToken(refreshToken: string) {
    cookies.set("refreshToken", refreshToken, { expires: 7 });
  }
}

export default Service;
