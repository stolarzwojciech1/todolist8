import "./style.css";
import React, { useState } from "react";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefult();
    addNewTask(newTaskContent.trim());
  };

  return (
    <form className="form " onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        className="form__input "
        autofocus
        name="task"
        placeholder="New task"
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <button className="form__button " autofocus>
        Add task
      </button>
    </form>
  );
};

export default Form;
