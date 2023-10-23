import React, { useState, useContext } from "react";
import NoteContext from "../context/NoteContext";

const AddNoteForm = () => {
  const { dispatch } = useContext(NoteContext);

  const addNote = (e) => {
    e.preventDefault();
    if (title) {
      dispatch({ type: "Add_Note", title, body });
      setTitle("");
      setBody("");
    }
  };
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
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
  );
};

export default AddNoteForm;
