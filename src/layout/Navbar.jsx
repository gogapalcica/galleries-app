import { Link } from "react-router-dom";
import { authService } from "../services/AuthService";

export const Navbar = () => {
  const isAuthUser = window.localStorage.getItem("token");

  return (
    <nav>
      {!isAuthUser ? (
        <div>
          <Link to="/login">Login</Link>{" "}
          <Link to="/register">Register</Link>{" "}
          <Link to="/">All Galleries</Link>{" "}
        </div>
      ) : (
        <div>
          <Link to="/">All Galleries</Link>{" "}
          <Link to="my-galleries">My Galleries</Link>{" "}
          <Link to="/create">Create New Gallery</Link>{" "}
          <Link to="/edit-gallery/:id"></Link>
          <a className="toggleable" onClick={authService.logout} role="button">
            Logout
          </a>
        </div>
      )}
    </nav>
  );
};
