class TodoList {
  constructor() {
    this.taskLiskArr = JSON.parse(localStorage.getItem('taskstore')) || [];
  }

  addTask = (item) => {
    this.taskLiskArr.push({
      description: item, completed: false, index: this.taskLiskArr.length + 1,
    });
    this.populateLocalStorage();
    this.displayTask();
  }

  removeTask = (index) => {
    this.taskLiskArr = this.taskLiskArr.filter((task) => task.index !== index);
    this.updateIndex();
    this.populateLocalStorage();
    this.displayTask();
  }

  updateIndex = () => {
    this.taskLiskArr = this.taskLiskArr.map((task, index) => {
      task.index = index + 1;
      return task;
    });
  }

 displayTask = () => {
   const todo = document.querySelector('#toDoInputList');
   todo.innerHTML = '';
   for (let i = 0; i < this.taskLiskArr.length; i += 1) {
     todo.innerHTML += `<div class='todo-div'>
        <input type='checkbox' class='check' id="${i}">
        <li class='todoListItem' contenteditable="true"
        >${this.taskLiskArr[i].description}</li>
        <div class="icons"
        <i class="fa-solid fa-ellipsis-vertical"></i>
        <i class="fa-solid fa-trash-can" data-index=${i + 1}></i>
        </div>
        </div>
        `;
   }
   const deleteBtn = document.querySelectorAll('.fa-trash-can');
   deleteBtn.forEach((button) => {
     button.addEventListener('click', (event) => {
       const id = parseInt(event.target.getAttribute('data-index'), 10);
       this.removeTask(id);
     });
   });
 }

markCompled = (index) => {
  this.taskLiskArr[index].completed = !this.taskLiskArr[index].completed;
  this.populateLocalStorage();
}

populateLocalStorage = () => {
  localStorage.setItem('taskstore', JSON.stringify(this.taskLiskArr));
}
}

export default TodoList;