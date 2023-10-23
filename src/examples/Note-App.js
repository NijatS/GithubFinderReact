import React, { StrictMode, useEffect, useState, useReducer } from "react";
import ReactDOM from "react-dom";
import "../styles/main.scss";

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

const NoteApp = () => {
  const [notes, dispatch] = useReducer(NotesReducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    if (title) {
      // setNotes([...notes, { title, body }]);
      dispatch({ type: "Add_Note", title, body });
      setTitle("");
      setBody("");
    }
  };
  useEffect(() => {
    const LocalNotes = JSON.parse(localStorage.getItem("notes"));
    if (LocalNotes) {
      // setNotes(LocalNotes);
      dispatch({ type: "Population_Notes", notes: LocalNotes });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  });
  const removeNote = (title) => {
    // setNotes(notes.filter((note) => note.title !== title));
    dispatch({ type: "Remove_Note", title });
  };
  return (
    <div className="container p-5">
      <div className="card mb-3">
        <div className="card-header">Notes</div>
        <div className="card-body">
          {notes && (
            <table className="table table-sm table-striped mb-0">
              <tbody>
                {notes.map((note) => (
                  <tr key={note.title}>
                    <td>{note.title}</td>
                    <td>{note.body}</td>
                    <td style={{ width: "3%" }}>
                      <button
                        onClick={() => removeNote(note.title)}
                        className="btn btn-sm btn-danger"
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">Add New Note</div>
        <div className="card-body">
          <form onSubmit={addNote}>
            <div className="form-group">
              <input
                className="form-control"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
              />
            </div>
            <div className="form-group">
              <textarea
                style={{ marginTop: "15px" }}
                className="form-control"
                onChange={(e) => {
                  setBody(e.target.value);
                }}
                value={body}
              />
            </div>
            <button
              style={{ width: "100%", marginTop: "15px" }}
              className="btn btn-block btn-primary"
            >
              Add Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
const root = document.querySelector("#root");

ReactDOM.render(
  <StrictMode>
    <NoteApp />
  </StrictMode>,
  root
);
