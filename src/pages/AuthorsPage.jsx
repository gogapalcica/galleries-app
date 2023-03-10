import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userService } from "../services/UserService";
import { GalleriesDetails } from "../components/GalleriesDetails";

export const Authors = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState([{id:0, url:[""]}]);

  const getAuthorHandler = async (id) => {
    const { data } = await userService.get(id);
    setAuthor(data.data);
  };

  useEffect(() => {
    getAuthorHandler(id);
  }, []);

  return (
    <div>
      <ul>
        {id && 
          author.map((gallery) => (
            <li key={gallery.id}>
              <GalleriesDetails
                id={gallery.id}
                title={gallery.title}
                url={gallery.url}
                createdAt={gallery.created_at}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};