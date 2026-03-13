const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

const todos = [];

const renderTodos = () => {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    // 1. li element banao
    let todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");

    // 2. completed ho tो class add karo
    if (todo.completed) {
      todoItem.classList.add("completed");
    }

    // 3. dataset mein id store karo
    todoItem.dataset.id = todo.id;

    // 4. innerHTML set karo
    todoItem.innerHTML = `
      <span>${todo.text}</span>
      <div class="todo-actions">
        <button class="btn-complete">✓</button>
        <button class="btn-delete">✕</button>
      </div>
    `;

    // 5. complete button ka event
    const completeBtn = todoItem.querySelector(".btn-complete");
    completeBtn.addEventListener("click", () => {
      const foundTodo = todos.find(
        (todo) => todo.id === Number(todoItem.dataset.id)
      );
      foundTodo.completed = !foundTodo.completed;
      renderTodos();
    });

    // 6. delete button ka event
    const deleteBtn = todoItem.querySelector(".btn-delete")
    deleteBtn.addEventListener("click", () => {
      const index = todos.filter(todo => todo.id !== Number(todoItem.dataset.id))
      todos.splice(index, 1)
      renderTodos()
    })
    

    // 6. ul mein append karo
    todoList.appendChild(todoItem);
  });
};

const addTodo = () => {
  const value = todoInput.value;
  if (value === "") return;
  const todoObject = { id: Date.now(), text: value, completed: false };
  todos.push(todoObject);
  todoInput.value = "";
  renderTodos();
};

addBtn.addEventListener("click", () => {
  addTodo();
});