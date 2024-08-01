const Edit = ({
  title,
  content,
  saveTitleToState,
  saveContentToState,
  updatePost,
  cancelEdit,
}) => {
  return (
    <div className="container my-3">
      <form className="w-50 mx-auto">
        <h1>Edit Post</h1>
        <input
          className="form-control"
          type="text"
          defaultValue={title}
          onChange={saveTitleToState}
          placeholder="title"
        />
        <br />
        <br />
        <textarea
          className="form-control"
          placeholder="contents"
          onChange={saveContentToState}
          defaultValue={content}
        ></textarea>
        <br />
        <br />
        <button className="btn btn-success me-3" onClick={updatePost}>
          Update Post
        </button>
        <button className="btn btn-danger me-3" onClick={cancelEdit}>
          Cancel
        </button>
      </form>
    </div>
  );
};
export default Edit;
