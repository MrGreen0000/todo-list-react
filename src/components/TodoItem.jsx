import PropTypes from 'prop-types';

function TodoItem( {todo, deleteTodo}) {
  return (
    <li className="mb-20 d-flex flexrow justify-content-center align-items-center p-10">
    <span className="flex-fill m-15"> {todo.content}  </span>
        <button className="btn btn-primary mr-15">Valider</button>
        <button className="btn btn-primary mr-15">Modifier</button>
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-reverse-primary mr-15">Supprimer</button>
    </li>
  )
  }
  TodoItem.propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired,
    deleteTodo : PropTypes.func.isRequired
  };

export default TodoItem;
