//  This component will display all the posts on the main page.
//It will show the title, a part of the content (max 60 characters), tags, and the name of the creator (user).

import { useEffect, useState } from "react";

function Post() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const api = await fetch("https://dummyjson.com/posts");
    const postData = await api.json();
    console.log(postData);
    setData(postData.posts);
  };

  return (
    <>
      {data.map((posts) => {
        return (
          <>
            <div key={posts.id}>
              <h1>{posts.title}</h1>
              <p>{posts.body}</p>
              <a>{posts.tags}</a>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Post;
