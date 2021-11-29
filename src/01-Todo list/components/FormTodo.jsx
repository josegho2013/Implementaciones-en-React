import React, { useState } from "react";

const FormTodo = () => {
  const { handleAddItem } = props;
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setDescription("");
  };

  handleAddItem({
    done: false,
    id: (+new Date()).toString(),
    description,
  });
  setDescription(""); // (B)
};
return (
  <form onSubmit={handleSubmit}>
    <div className="todo-list">
      <div className="file-input">
        <input
          type="text"
          className="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="button" disabled={description ? "" : "disabled"}>
          Add
        </button>
      </div>
    </div>
  </form>
);
export default FormTodo;
