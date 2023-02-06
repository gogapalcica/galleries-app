export const AddCommentForm = ({ comment, submitComment, handleChange }) => {
  return (
    <form onSubmit={(e) => submitComment(e)}>
      <label>Add Comment:</label>
      <input
        type="text"
        name="content"
        required
        max="1000"
        value={comment.content}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};
