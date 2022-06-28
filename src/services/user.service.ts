import Service from "./service";
import cookies from "js-cookie";
import { getMyData, getReadData } from "../api";
class UserService extends Service {
  async me() {
    const accessToken = cookies.get("accessToken");
    if (!accessToken) return;

    const { data } = await getMyData(accessToken);

    return data;
  }

  async read(id: number) {
    const { data } = await getReadData(id);

    return data;
  }
}

export default new UserService();
