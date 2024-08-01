import React, { useEffect, useRef, useState } from "react";
import Create from "./Create";
import Post from "./Post";
import Edit from "./Edit";

const List = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "t1",
      content: "c1",
    },
    {
      id: 2,
      title: "t2",
      content: "c2",
    },
    {
      id: 3,
      title: "t3",
      content: "c3",
    },
  ]);

  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const getTitle = useRef();
  const getContent = useRef();

  const saveTitleToState = (e) => {
    setTitle(e.target.value);
  };

  const saveContentToState = (e) => {
    setContent(e.target.value);
  };

  const savePost = (e) => {
    e.preventDefault();
    const id = Date.now();
    setPosts([...posts, { id, title, content }]);
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreate();
  };

  const toggleCreate = () => {
    setIsCreate(!isCreate);
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  const editPost = (id) => {
    setEditId(id);
    toggleEdit();
  };

  const cancelEdit = (e) => {
    e.preventDefault();
    setEditId(!isEdit);
  };

  const deletePost = (id) => {
    const modifiedPosts = posts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setPosts(modifiedPosts);
  };

  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = posts.map((eachPost) => {
      if (eachPost.id === editId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content,
        };
      }
      return eachPost;
    });
    setPosts(updatedPost);
    toggleEdit();
  };

  if (isCreate) {
    return (
      <Create
        getTitle={getTitle}
        getContent={getContent}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
        savePost={savePost}
      />
    );
  } else if (isEdit) {
    const post = posts.find((post) => {
      return post.id === editId;
    });
    return (
      <Edit
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        cancelEdit={cancelEdit}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
      />
    );
  }
  return (
    <>
      <h2 style={{ textAlign: "center" }} className="m-3">
        All Posts
      </h2>
      {!posts.length ? (
        <div>
          <h3>There is nothing to see here!</h3>
        </div>
      ) : (
        <table className="table w-75 mx-auto">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              return (
                <tr>
                  <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    editPost={editPost}
                    deletePost={deletePost}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <br />
      <br />
      <button className="btn btn-success ms-4" onClick={toggleCreate}>
        Create New
      </button>
    </>
  );
};

export default List;
