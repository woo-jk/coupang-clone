import Service from "./service";
import cookies from "js-cookie";

class UserService extends Service {
  async me() {
    const accessToken = cookies.get("accessToken");
    if (!accessToken) return;

    const api = api();
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
