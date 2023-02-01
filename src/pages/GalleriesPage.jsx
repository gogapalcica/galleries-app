import { useEffect, useState } from "react";
import { GalleriesDetails } from "../components/GalleriesDetails";
import { galleryService } from "../services/GalleryService";

export const Galleries = () => {
  const [galleries, setGalleries] = useState({});

  const getGalleriesHandler = async () => {
    const { data } = await galleryService.getAll();
    setGalleries(data.data);
  };

  useEffect(() => {
    getGalleriesHandler();
  }, []);

  return (
    <div>
      <h1>Galleries</h1>
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
