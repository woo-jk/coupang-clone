import api from "./api";
import cookies from "js-cookie";

class UserService {
  async me() {
    const accessToken = cookies.get("accessToken");
    if (!accessToken) return;

    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const { data } = await api.get("/users/me");

    return data;
  }

  async read(id: number) {
    const { data } = await api.get("/users/" + id);

    return data;
  }
}

export default new UserService();
