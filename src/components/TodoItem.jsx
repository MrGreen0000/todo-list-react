import PropTypes from "prop-types";
import Button from "./Button";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo, selectTodo }) {
  return (
    <li
      onClick={selectTodo}
      className={`mb-20 d-flex flexrow justify-content-center align-items-center p-10 ${
        todo.selected ? "selected" : ""
      }`}
    >
      <span className="flex-fill m-15">
        {" "}
        {todo.content} {todo.done && "(✓)"}{" "}
      </span>
      <Button
        className="mr-15"
        text="Valider"
        onClick={(e) => {
          e.stopPropagation();
          toggleTodo();
        }}
      />
      <Button
        className="mr-15"
        text="Modifier"
        onClick={(e) => {
          e.stopPropagation();
          editTodo();
        }}
      />
      <Button
        text="Supprimer"
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo();
        }}
      />
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  selectTodo: PropTypes.func.isRequired,
};

export default TodoItem;
