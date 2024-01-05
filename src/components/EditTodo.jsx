import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function EditTodo({ todo, editTodo, cancelEditTodo }) {
  const [value, setValue] = useState(todo.content);

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && value.length) {
      editTodo(value);
      setValue("");
    }
  }

  function handleClick() {
    if (value.length) {
      editTodo(value);
      setValue("");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center mb-10">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
        className="mr-15 flex-fill"
        placeholder="Ajouter une tâche"
      />
      <Button className="mr-15" text="Sauvegarder" onClick={handleClick} />
      <Button text="Annuler" onClick={cancelEditTodo} />
    </div>
  );
}

EditTodo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  editTodo: PropTypes.func.isRequired,
  cancelEditTodo: PropTypes.func.isRequired,
};

export default EditTodo;
