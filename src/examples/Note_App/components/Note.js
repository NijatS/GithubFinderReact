import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";

const Note = ({ note }) => {
  const { dispatch } = useContext(NoteContext);
  const removeNote = (title) => {
    dispatch({ type: "Remove_Note", title });
  };
  return (
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
  );
};
export default Note;
