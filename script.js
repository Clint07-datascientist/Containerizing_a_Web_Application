const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');
const clearAllButton = document.getElementById('clearAll');
const clearCompletedButton = document.getElementById('clearCompleted');

// Load todos from local storage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Render todos
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div>
        <input type="checkbox" onchange="toggleComplete(${index})" ${todo.completed ? 'checked' : ''}>
        <span class="todo-text ${todo.completed ? 'completed' : ''}" onclick="editTodo(${index})">${todo.text}</span>
      </div>
      <div>
        <i class="fas fa-edit edit-icon" onclick="editTodo(${index})"></i>
        <i class="fas fa-trash delete-icon" onclick="deleteTodo(${index})"></i>
      </div>
    `;
    if (todo.completed) {
      li.classList.add('completed');
    }
    todoList.appendChild(li);
  });
}

// Save todos to local storage
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Add todo
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    todos.push({ text: todoText, completed: false });
    saveTodos();
    renderTodos();
    todoInput.value = '';
  }
}

// Toggle todo completion
function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos();
}

// Edit todo
function editTodo(index) {
  const todoText = todos[index].text;
  const newText = prompt('Edit todo:', todoText);
  if (newText !== null) {
    todos[index].text = newText.trim();
    saveTodos();
    renderTodos();
  }
}

// Delete todo
function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

// Clear all todos
clearAllButton.addEventListener('click', () => {
  todos = [];
  saveTodos();
  renderTodos();
});

// Clear completed todos
clearCompletedButton.addEventListener('click', () => {
  todos = todos.filter(todo => !todo.completed);
  saveTodos();
  renderTodos();
});

// Add todo on Enter key press
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});

// Add todo on button click
addTodoButton.addEventListener('click', addTodo);

// Initial render
renderTodos();
