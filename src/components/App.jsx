import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function handleClick(inputNote) {
    setNotes((prevValue) => {
      return [...prevValue, inputNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea clicked={handleClick} />
      {notes.map((noteItem, index) => (
        <Note
          delete={deleteNote}
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
