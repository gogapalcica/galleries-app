import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GalleriesDetails } from "../components/GalleriesDetails";
import { userService } from "../services/UserService";

export const MyGalleries = () => {
  const userId = window.localStorage.getItem("userId");
  const [galleries, setGalleries] = useState({});

  const getGalleriesHandler = async (id) => {
    const { data } = await userService.get(id);
    setGalleries(data.data);
  };

  useEffect(() => {
    if (userId) {
      getGalleriesHandler(userId);
    }
  }, [userId]);

  return (
    <div>
      <h1>My Galleries</h1>
      <ul>
        {galleries[0] &&
          galleries.map((gallery) => (
            <li key={gallery.id}>
              <GalleriesDetails
                id={gallery.id}
                title={gallery.title}
                user={gallery.user}
                url={gallery.url}
                createdAt={gallery.created_at}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
