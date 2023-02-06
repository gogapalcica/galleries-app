import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddCommentForm } from "../components/AddCommentForm";
import { GalleryDetails } from "../components/GalleryDetails";
import { commentService } from "../services/CommentService";
import { galleryService } from "../services/GalleryService";

export const Gallery = () => {
  const { id } = useParams();
  const userId = window.localStorage.getItem("userId");

  const [gallery, setGallery] = useState({ url: [""], user: { id: 0 } });
  const [comment, setComment] = useState({ content: "" });

  const getGalleryHandler = async (id) => {
    const { data } = await galleryService.get(id);
    setGallery(data);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await commentService.create(id, comment);
    getGalleryHandler(id);
    setComment({ content: "" });
  };

  const changeHandler = (e) => {
    setComment({ ...comment, content: e.target.value });
  };

  useEffect(() => {
    if (id) {
      getGalleryHandler(id);
    }
  }, []);

  const deleteCommentHandler = async (commentId) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      await commentService.delete(commentId);
      getGalleryHandler(id);
    }
  };

  const handleDeleteGallery = async (id) => {
    if (window.confirm("Are you sure you want to delete this gallery?")) {
      await galleryService.delete(id);
      window.location.replace("/my-galleries");
    }
  };

  return (
    <div>
      <GalleryDetails
        gallery={gallery}
        user={gallery.user}
        comments={gallery.comments}
        deleteCommentHandler={deleteCommentHandler}
        userId={userId}
        handleDeleteGallery={handleDeleteGallery}
      />
      <AddCommentForm
        comment={comment}
        submitComment={submitHandler}
        handleChange={changeHandler}
      />
    </div>
  );
};
