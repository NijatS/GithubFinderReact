const GithubReducer = (state, action) => {
  switch (action.type) {
    case "Search_Users":
      return {
        ...state,
        users: action.payload,
        loader: false,
      };
    case "Set_Loading":
      return {
        ...state,
        loader: true,
      };
    default:
      return state;
  }
};
export default GithubReducer;
