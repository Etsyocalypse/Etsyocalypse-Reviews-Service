import React from 'react';

const Task = (props) => {
  return (
    <>
      <ul>{props.tasks.map((task, index) => <li onClick={props.deleteItem} key={index} data-id={task.id}>{task.task}</li>)}</ul>
    </>
  )
}


export default Task;
