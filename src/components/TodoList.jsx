import PropTypes from "prop-types";
import TodoItem from "./TodoItem.jsx";

function TodoList({ todoList }) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  ) : (
    <p> Aucune todo pour le moment</p>
  );
}
TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      edit: PropTypes.bool.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TodoList;
