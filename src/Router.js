import { Route, Switch } from "react-router-dom";
import GuardedRoute from "./components/common/GuardedRoute";
import GuestRoute from "./components/common/GuestRoute";
import { Authors } from "./pages/AuthorsPage";
import { AddGallery } from "./pages/CreateGalleryPage";
import { Galleries } from "./pages/GalleriesPage";
import { MyGalleries } from "./pages/MyGalleries";
import { Gallery } from "./pages/GalleryPage";
import { Login } from "./pages/LoginPage";
import { Register } from "./pages/RegisterPage";
import { ControlledCarousel } from "./components/Bootstrap";
import { EditGallery } from "./pages/EditGalleryPage";

export const Router = () => {
  return (
    <Switch>
      <Route component={Galleries} exact path="/" />
      <Route component={ControlledCarousel} exact path="/carousel" />
      <GuardedRoute component={MyGalleries} path="/my-galleries" />
      <GuardedRoute component={EditGallery} exact path="/edit-gallery/id" />
      <GuardedRoute component={Gallery} path="/galleries/:id" />
      <GuardedRoute component={AddGallery} path="/create" />
      <GuardedRoute component={AddGallery} path="/edit/:id"/>
      <GuardedRoute component={Authors} path="/authors/:id" />
      <GuestRoute component={Login} path="/login" />
      <GuestRoute component={Register} path="/register" />
    </Switch>
  );
};
