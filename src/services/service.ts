import axios from "axios";

class Service {
  apiCreate() {
    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
    });
  }
}

export default Service;
