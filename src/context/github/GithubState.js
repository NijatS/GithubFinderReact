import React, { useReducer, useEffect } from "react";
import GithubReducer from "./GithubReducer";
import GithubContext from "./GithubContext";
import axios from "axios";
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loader: false,
  };
  useEffect(() => {
    setLoader();
    axios.get("https://api.github.com/users").then((res) => {
      dispatch({ type: "Search_Users", payload: res.data });
    });
  }, []);

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  const searchUsers = (keyword) => {
    setLoader();
    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) => {
          dispatch({ type: "Search_Users", payload: res.data.items });
        });
    }, 1000);
  };
  const getUser = (username) => {
    setLoader();
    setTimeout(() => {
      axios.get(`https://api.github.com/users/${username}`).then((res) => {
        dispatch({ type: "Get_User", payload: res.data });
      });
    }, 1000);
  };
  const clearItems = () => {
    dispatch({ type: "Clear_User" });
  };
  const setLoader = () => {
    dispatch({ type: "Set_Loading" });
  };
  const getUserRepos = (username) => {
    setLoader();
    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((res) => {
          dispatch({ type: "Get_Repos", payload: res.data });
        });
    }, 1000);
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loader: state.loader,
        searchUsers,
        clearItems,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
