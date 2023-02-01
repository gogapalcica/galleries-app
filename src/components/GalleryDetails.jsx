import { Link } from "react-router-dom";

export const GalleryDetails = ({ title, description, url }) => {
  return (
    <div>
      <h2> {title} Gallery</h2>
      <br />
      Description: {description}
      <br />
      <img src={url} width="400px" height="300px" />
      <br />
    </div>
  );
};
