import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userService } from "../services/UserService";
import { GalleriesDetails } from "../components/GalleriesDetails";

export const Authors = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState({});

  const getAuthorHandler = async (id) => {
    const { data } = await userService.get(id);
    setAuthor(data);
  };

  useEffect(() => {
    getAuthorHandler(id);
    console.log(author[0])
  }, []);

  return (
    <div>
      <ul>
        {console.log(author)}
        {author.id &&
          author.galleries.map((gallery) => (
            <li key={gallery.id}>
              <GalleriesDetails
                id={gallery.id}
                title={gallery.title}
                url={gallery.url}
                createdAt={gallery.created_at}
                user={author}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};