import { useState, createContext } from "react";

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const PostsContext = createContext({});
export default PostsContext;

export const PostsProvider = ({ allPosts, children }) => {
  const [posts, setPosts] = useState(allPosts);
  return (
    <PostsContext.Provider value={{ posts, setPosts, allPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

