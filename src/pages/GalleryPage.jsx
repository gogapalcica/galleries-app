import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GalleryDetails } from "../components/GalleryDetails";
import { galleryService } from "../services/GalleryService";

export const Gallery = () => {
  const { id } = useParams();
  const [gallery, setGallery] = useState({});

  const getGalleryHandler = async (id) => {
    const { data } = await galleryService.get(id);
    setGallery(data);
  };

  useEffect(() => {
    getGalleryHandler(id);
  }, []);

  return (
    id && (
      <GalleryDetails
        title={gallery.title}
        description={gallery.description}
        url={gallery.url}
      />
    )
  );
};
