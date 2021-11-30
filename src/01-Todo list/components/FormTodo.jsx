import React, { useState } from "react";
import "../css/todoList.css"

const FormTodo = (props) => {
  const { handleAddItem } = props;
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description,
    });
    setDescription("");
  };

  return (
    <div>
      <h1 className="title"> To Do List</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="text"
            placeholder="Add Task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="buttonAdd" disabled={description ? "" : "disabled"}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormTodo;
