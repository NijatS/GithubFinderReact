import React, { StrictMode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../styles/main.scss";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    if (title) {
      setNotes([...notes, { title, body }]);
      setTitle("");
      setBody("");
      console.log(notes);
    }
  };
  useEffect(() => {
    const LocalNotes = JSON.parse(localStorage.getItem("notes"));
    if (LocalNotes) {
      setNotes(LocalNotes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  });
  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
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
