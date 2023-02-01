import { Route, Switch } from "react-router-dom";
import { Authors } from "./pages/AuthorsPage";
import { Galleries } from "./pages/GalleriesPage";
import { Gallery } from "./pages/GalleryPage";
import { Login } from "./pages/LoginPage";
import { Register } from "./pages/RegisterPage";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Galleries />
      </Route>
      <Route path= "/galleries/:id">
        <Gallery/>
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path='/authors/:id'>
          <Authors/>
        </Route>
    </Switch>
  );
};
