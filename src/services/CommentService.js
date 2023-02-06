import { authService } from "./AuthService";
import { ApiService } from "./ApiService";

class CommentService extends ApiService {
  constructor() {
    super();
    this.authService = authService;
  }
  create = async ( id, content ) => {
    const response = await this.client.post(
      `galleries/${id}/comments`,
      content,
      {
        headers: this.authService.getHeaders(),
      }
    );
    return response.data;
  };

  delete = async (id) => {
    const response = await this.client.delete(`/galleries/comments/${id}`, {
      headers: this.authService.getHeaders(),
    });
    return response.data;
  };
}
export const commentService = new CommentService();
