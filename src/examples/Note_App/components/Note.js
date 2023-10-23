import React from "react";

const Note = ({ note, removeNote }) => {
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
