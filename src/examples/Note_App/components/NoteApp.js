import React, { useEffect, useState, useReducer } from "react";
import NotesReducer from "../reducers/notes";
import Notes from "./Notes";
import AddNoteForm from "./AddNoteForm";
import NoteContext from "../context/NoteContext";

const NoteApp = () => {
  const [notes, dispatch] = useReducer(NotesReducer, []);

  useEffect(() => {
    const LocalNotes = JSON.parse(localStorage.getItem("notes"));
    if (LocalNotes) {
      dispatch({ type: "Population_Notes", notes: LocalNotes });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  });

  return (
    <NoteContext.Provider value={{ notes, dispatch }}>
      <div className="container p-5">
        <div className="card mb-3">
          <div className="card-header">Notes</div>
          <div className="card-body">
            {notes && (
              <table className="table table-sm table-striped mb-0">
                <tbody>
                  <Notes />
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">Add New Note</div>
          <div className="card-body">
            <AddNoteForm />
          </div>
        </div>
      </div>
    </NoteContext.Provider>
  );
};
export default NoteApp;
