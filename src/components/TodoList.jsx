import PropTypes from "prop-types";
import TodoItem from "./TodoItem.jsx";
import EditTodo from "./EditTodo.jsx";

function TodoList({
  todoList,
  deleteTodo,
  toggleTodo,
  toggleTodoEdit,
  editTodo,
  selectTodo,
}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            key={todo.id}
            todo={todo}
            cancelEditTodo={() => toggleTodoEdit(todo.id)}
            editTodo={(content) => editTodo(todo.id, content)}
          />
        ) : (
          <TodoItem
            key={todo.id}
            todo={todo}
            editTodo={() => toggleTodoEdit(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
            toggleTodo={() => toggleTodo(todo.id)}
            selectTodo={() => selectTodo(todo.id)}
          />
        )
      )}
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
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  toggleTodoEdit: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  selectTodo: PropTypes.func.isRequired,
};

export default TodoList;
