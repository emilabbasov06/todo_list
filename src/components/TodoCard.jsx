import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;

  return (
    <li className='todoItem'>
      {children}
      <button
        onClick={() => {
          handleEditTodo(index);
        }}
      >
        <MdEdit />
      </button>
      <button
        onClick={() => {
          handleDeleteTodo(index);
        }}
      >
        <MdDelete />
      </button>
    </li>
  );
}

export default TodoCard;
