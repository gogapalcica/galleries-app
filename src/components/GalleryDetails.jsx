import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export const GalleryDetails = ({
  gallery,
  comments,
  user,
  deleteCommentHandler,
  userId,
  handleDeleteGallery,
}) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1>{gallery.title}</h1>
        {gallery.user_id == userId ? (
          <p style={{ marginLeft: "auto" }}>
            <button
              type="button"
              onClick={() => handleDeleteGallery(gallery.id)}
            >
              Delete
            </button>{" "}
            <button
              type="button"
              onClick={() =>
                window.location.replace(`/edit-gallery/${gallery.id}`)
              }
            >
              Edit
            </button>
          </p>
        ) : (
          ""
        )}
      </div>
      <br />
      <Link to={`authors/${user.id}`}>
        {user.firstName} {user.lastName}
      </Link>
      <br />
      <br />
      Created at: {gallery.created_at}
      <br />
      Description: {gallery.description}
      <br />
      <Carousel>
        {gallery.url.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
      <br />
      <ul>
        {comments &&
          comments.map((comment) => (
            <li key={comment.id}>
              {comment.content}
              <br />
              By: {comment.user.firstName} {comment.user.lastName}
              <br />
              Commented at:
              {comment.created_at}
              <br />
              {comment.user_id == userId ? (
                <button
                  type="button"
                  onClick={() => deleteCommentHandler(comment.id)}
                >
                  Delete Comment
                </button>
              ) : (
                ""
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};
