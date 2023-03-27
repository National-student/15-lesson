import React from "react";
import "./userSingle.scss";
import { Link, useParams } from "react-router-dom";

export const UserSingle = () => {
  const { userId } = useParams();

  const [single, setSingle] = React.useState([]);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch(process.env.REACT_APP_URL + `/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setSingle(data))
      .catch((err) => console.error(err));

    fetch(process.env.REACT_APP_URL + `/posts?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>UserSingle</h1>

      <div className="userSingle">
        <img src="https://picsum.photos/200" alt="user" />
        {
          <ul>
            <li key={single.id}>
              <h3>{single.name}</h3>
              <Link>@{single.username}</Link>
              <p>{single.email}</p>
            </li>
          </ul>
        }
      </div>

      <h1>Posts</h1>

      {posts.length > 0 && <ul>
        {
            posts.map(post => (
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            ))
        }
        </ul>}
    </>
  );
};
