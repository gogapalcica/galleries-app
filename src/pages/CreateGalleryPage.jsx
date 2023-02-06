import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CreateGalleryForm } from "../components/CreateGalleryForm";
import { galleryService } from "../services/GalleryService";

export const AddGallery = () => {
  const { id } = useParams();
  const [newGallery, setNewGallery] = useState({
    title: "",
    description: "",
    url: [""],
  });

  const getGalleriHandler = async (id) => {
    const { data } = await galleryService.get(id);
    setNewGallery(data);
  };
  useEffect(() => {
    if (id) {
      getGalleriHandler(id);
      return;
    }
    setNewGallery({
      title: "",
      description: "",
      url: [""],
    });
  }, [id]);

  const handleURLChange = (e, index) => {
    const { value } = e.target;
    const { url } = newGallery;
    url[index] = value;
    setNewGallery({ ...newGallery, url: url });
  };

  const changeHandler = (e) => {
    setNewGallery({ ...newGallery, [e.target.name]: e.target.value });
    console.log(newGallery);
  };

  const addURLHandler = () => {
    setNewGallery({ ...newGallery, url: [...newGallery.url, ""] });
  };

  const handleRemoveURL = (index) => {
    const { url } = newGallery;
    url.splice(index, 1);
    setNewGallery({ ...newGallery, url: url });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await galleryService.add(newGallery);
    setNewGallery({});
    window.location.replace("/my-galleries");
  };

  return (
    <CreateGalleryForm
      gallery={newGallery}
      handleChange={changeHandler}
      handleSubmit={submitHandler}
      handleAddURL={addURLHandler}
      urlChangeHandler ={handleURLChange}
      handleRemove = {handleRemoveURL}
    />
  );
};
