import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GalleriesDetails } from "../components/GalleriesDetails";
import { GalleriesFilter } from "../components/GalleriesFilter";
import { galleryService } from "../services/GalleryService";

export const Galleries = () => {
  const [galleries, setGalleries] = useState({});
  const [search, setSearch] = useState({ filter: "" });
  const [page, setPage] = useState(0);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const perPage=10;
  const handlePagination= () => {
    setPage((prevPage) => prevPage++);
  }
  const renderGalleries = () =>{
    const copyGalleries = [...galleries];
    const totalToShow = perPage * page - 1;
    let showGalleries = copyGalleries.slice(0, totalToShow);
    setGalleries(showGalleries);
    if (copyGalleries.length < totalToShow){
      setShowLoadMore(false);
    }
  }
  // useEffect(() => {
  //   renderGalleries();
  // }, [page]);
  
  const location = useLocation();
  const parameters = new URLSearchParams(location.search);

  const getGalleriesHandler = async () => {
    const { data } = await galleryService.getAll();
    setGalleries(data.data);
  };

  useEffect(() => {
    getGalleriesHandler();
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    if (!search.filter) {
      return;
    }
    window.location.replace(`/galleries?filter=${search.filter}`);
  };

  const onChangeHandler = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
    console.log(search);
  };

  return (
    <div>
      <div>
        <GalleriesFilter
          filter={search.filter}
          handleSearch={searchHandler}
          handleSearchChange={onChangeHandler}
        />
      </div>
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
          { showLoadMore && <button onClick={handlePagination}>Load More</button>}
      </ul>
     
    </div>
  );
};
