export const CreateGalleryForm = ({
  gallery,
  handleChange,
  handleSubmit,
  handleAddURL,
  urlChangeHandler,
  handleRemove,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        placeholder="Enter title"
        required
        min="2"
        max="255"
        value={gallery.title}
        onChange={handleChange}
      />
      <br />
      <label>Description:</label>
      <input
        type="text"
        max="1000"
        name="description"
        placeholder="Enter description"
        value={gallery.description}
        onChange={handleChange}
      />
      <br />
      <label>Image url:</label>
      {gallery &&
        gallery.url.map((url, index) => {
          return (
            <div key={index}>
              <input
                placeholder="Enter Image URL"
                value={url}
                onChange={(e) => {
                  urlChangeHandler(e, index);
                }}
              />
              <div>
                {gallery.url.length !== 1 && (
                  <button onClick={() => handleRemove(index)}>Remove</button>
                )}
              </div>
            </div>
          );
        })}
      <br />
      <button onClick={handleAddURL}>Add another URL</button>
      <br />
      <button
        type="submit"
        onClick={() => window.location.replace("/my-galleries")}
      >
        Add Gallery
      </button>
    </form>
  );
};
