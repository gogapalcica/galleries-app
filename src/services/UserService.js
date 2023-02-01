import { ApiService } from "./ApiService";
import { authService } from "./AuthService";

class UserService extends ApiService {
  constructor() {
    super();
    this.authService = authService;
  }

  get = async (id) => {
    return await this.client.get(`/authors/${id}`, {
      headers: this.authService.getHeaders(),
    });
  };
}

export const userService = new UserService();