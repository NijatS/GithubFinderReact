const GithubReducer = (state, action) => {
  switch (action.type) {
    case "Search_Users":
      return {
        ...state,
        users: action.payload,
        loader: false,
      };
    case "Get_User":
      return {
        ...state,
        user: action.payload,
        loader: false,
      };
    case "Get_Repos":
      return {
        ...state,
        repos: action.payload,
        loader: false,
      };
    case "Set_Loading":
      return {
        ...state,
        loader: true,
      };
    case "Clear_User":
      return {
        ...state,
        users: [],
        loader: false,
      };
    default:
      return state;
  }
};
export default GithubReducer;
