import { ApiService } from "./ApiService";
import { authService } from "./AuthService";

class GalleryService extends ApiService {
  constructor() {
    super();
    this.authService = authService;
  }

  getAll = async () => {
    return await this.client.get('/galleries?filter={"include":["user"]}', {
      headers: this.authService.getHeaders(),
    });
  };

  get = async (id) => {
    return await this.client.get(`/galleries/${id}`, {
      headers: this.authService.getHeaders(),
    });
  };

  add = async (gallery) => {
    return await this.client.post("/galleries", gallery, {
      headers: this.authService.getHeaders(),
    });
  };

  edit = async (id, gallery) => {
    return await this.client.put(`/galleries/${id}`, {
      headers: this.authService.getHeaders(),
    });
  };

  delete = async (id) => {
    return await this.client.delete(`/galleries/${id}`, {
      headers: this.authService.getHeaders(),
    });
  };
}

export const galleryService = new GalleryService();
