import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CreateGalleryForm } from "../components/CreateGalleryForm";
import { galleryService } from "../services/GalleryService";

export const EditGallery = () => {
  const { id } = useParams();
  const userId = window.localStorage.getItem("userId");
  const [gallery, setGallery] = useState({
    title: "",
    description: "",
    url: [""],
  });
  const handleGetGallery = async (id) => {
      const data = await galleryService.get(id);
      setGallery(data);
    };

  useEffect(() => {
    if (id && !gallery.id) {
      handleGetGallery(id);
    }
    if (gallery.id && userId != gallery.user_id) {
      window.location.replace("/");
    }
  }, [gallery.id]);

  const handleRemoveURL = (index) => {
    const { url } = gallery;
    url.splice(index, 1);
    setGallery({ ...gallery, url: url });
  };

  const handleURLChange = (e, index) => {
    const { value } = e.target;
    const { url } = gallery;
    url[index] = value;
    setGallery({ ...gallery, url: url });
  };

  const handleOnChange = (e) => {
    setGallery({ ...gallery, [e.target.name]: e.target.value });
  };

  const handleAddURL = () => {
    setGallery({ ...gallery, url: [...gallery.url, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await galleryService.edit(gallery.id, gallery);
    setGallery({ title: "", description: "", url: [""] });
    window.location.replace(`/galleries/${gallery.id}`);
  };

  return (
    <div>
      <CreateGalleryForm
        gallery={gallery}
        handleChange={handleOnChange}
        handleRemove={handleRemoveURL}
        handleAddURL={handleAddURL}
        handleSubmit={handleSubmit}
        urlChangeHandler={handleURLChange}
      />
    </div>
  );
};
