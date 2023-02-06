import { ApiService } from "./ApiService";

class AuthService extends ApiService {
  login = async (credentials) => {
    console.log(credentials);
    const response = await this.client.post("/auth/login", credentials);
    this.setAndRedirect(response);
    return response;
  };

  setAndRedirect = (response) => {
    window.localStorage.setItem("token", response.data.access_token);
    window.localStorage.setItem("userId", response.data.user.id);
    window.location.replace("/");
  };

  getHeaders = () => {
    return { Authorization: `Bearer ${window.localStorage.getItem("token")}` };
  };

  logout = async () => {
    await this.client.post("/auth/logout", {}, { headers: this.getHeaders() });
    window.localStorage.removeItem("token");
    window.location.replace("/login");
  };

  register = async (credentials) => {
    const response = await this.client.post("auth/register", credentials);
    this.setAndRedirect(response);
    return response;
  };
}

export const authService = new AuthService();
