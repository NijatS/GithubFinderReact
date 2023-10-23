const NotesReducer = (state, action) => {
  switch (action.type) {
    case "Population_Notes":
      return action.notes;
    case "Add_Note":
      return [...state, { title: action.title, body: action.body }];
    case "Remove_Note":
      return state.filter((note) => note.title !== action.title);
    default:
      return state;
  }
};
export default NotesReducer;
