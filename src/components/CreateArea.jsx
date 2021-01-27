import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(e) {
    const { value, name } = e.target;
    setNote((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content
        };
      } else {
        return {
          title: prevValue.title,
          content: value
        };
      }
    });
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          props.clicked(note);
          setNote({
            title: "",
            content: ""
          });
          event.preventDefault();
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
