import { Link } from "react-router-dom";

export const GalleriesDetails = ({ id, title, user, url, createdAt }) => {
  return (
    <div>
      <Link to={`/galleries/${id}`}>{title}</Link> <br />
      <img src={url} width="300px" height="250px" />
      <br />
      <h6>
        Posted by:
        <Link to={`/authors/${user.id}`}>
          {user.firstName} {user.lastName}
        </Link>
        <br />
        Created at: {createdAt}
      </h6>
    </div>
  );
};
