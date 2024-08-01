import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Post = ({ id, title, content, editPost, deletePost }) => {
  return (
    <>
      <td>{id}</td>
      <td>{title}</td>
      <td>{content}</td>
      <td>
        <button className="btn btn-success me-3" onClick={() => editPost(id)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="btn btn-danger" onClick={() => deletePost(id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </>
  );
};
export default Post;
