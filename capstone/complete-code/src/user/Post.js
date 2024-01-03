import React , {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUserWithPosts, deletePost, } from "../api";
import NoPostSelectedMessage from "./NoPostSelectedMessage";

export const Post = () => {
  const { userId, postId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ posts: [] });
  const [error, setError] = useState(undefined);


  useEffect(()=> {
    const abortController = new AbortController();
    fetchUserWithPosts(userId, abortController.signal)
      .then(setUser)
      .catch(setError);

    return () => abortController.abort();
  },[userId]);

  if(!user){
    return <p>Loading...</p>
  }
  const post = user?.posts.find((post) => post.id === Number(postId));

  const handleDelete = async (id) => {
    const result = window.confirm("Are you sure you want to delete this post?");
    if (result) {
      await deletePost(id);
      navigate("/");
    }
  };

  if (post) {
    return (
      <article className="col-12 p-4 border">
        <h3 className="display-4 mb-4">{post.title}</h3>
        <p>{post.body}</p>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete Post
        </button>
      </article>
    );
  }
  return <NoPostSelectedMessage />;
};

export default Post;
