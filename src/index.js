import todoList from './modules/task.js';
import './index.css';

const todo = document.getElementById('subsequent-list');
// console.log(todo);
const taskArr = () => {
  let taskList = '';

  for (let i = 0; i < todoList.length; i += 1) {
    const list = `
            <div class="todo-list">
            <input type="checkbox" class="check" value="task" ${todoList[i].completed}>
            <label for="item">${todoList[i].description}</label>
            <i id="dot" class="fa-solid fa-ellipsis-vertical"></i>
            <button><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
    taskList += list;
  }
  todo.innerHTML = taskList;
};
taskArr();

// const  = document.querySelector('#subsequent-list');
// subsequentList.appendChild(todo);
