const Create = ({
  getTitle,
  getContent,
  saveTitleToState,
  saveContentToState,
  savePost,
  cancelCreate,
}) => {
  return (
    <div className="container my-3">
      <form className="w-50 mx-auto">
        <h1>Create New Post</h1>
        <input
          className="form-control"
          type="text"
          placeholder="title"
          ref={getTitle}
          onChange={saveTitleToState}
        />
        <br />
        <br />
        <textarea
          className="form-control"
          placeholder="content"
          ref={getContent}
          onChange={saveContentToState}
        ></textarea>
        <br />
        <br />
        <button className="btn btn-success me-3" onClick={savePost}>
          Create Post
        </button>
        <button className="btn btn-danger me-3" onClick={cancelCreate}>
          Cancel
        </button>
      </form>
    </div>
  );
};
export default Create;
