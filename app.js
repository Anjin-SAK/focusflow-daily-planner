const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const prioritySelect = document.getElementById("priority");
const list = document.getElementById("task-list");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render tasks
function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span"); // to learn about span element // The <span> element in HTML is an inline container used to mark up a part of a text or a document. It does not inherently represent anything and is primarily used for styling purposes or to group elements for scripting. You can apply CSS styles or JavaScript functionality to the content within a <span> without affecting the layout of the document, as it does not create a new block-level element.
    span.textContent = `${task.text} (${task.priority})`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✓";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1); // what is splice in javascript // Splice is a method in JavaScript that allows you to add or remove elements from an array. It modifies the original array and can be used to delete elements at a specific index, add new elements, or replace existing elements.
      saveTasks();
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

// Add new task
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = input.value.trim();
  if (!taskText) return;

  tasks.push({
    text: taskText,
    priority: prioritySelect.value
  });

  saveTasks();
  renderTasks();
  input.value = "";
});

// Load tasks on page load
renderTasks();

// what is let and const in javascript
// In JavaScript, `let` and `const` are two keywords used to declare variables, introduced in ES6 (ECMAScript 2015).
// `let` is used to declare variables that can be reassigned later. It has block scope, meaning it is only accessible within the block it is defined in (e.g., inside a function or a loop).
// Example of `let`:
// let count = 0;
// count = 5; // This is valid
// `const`, on the other hand, is used to declare variables that cannot be reassigned after their initial assignment. Like `let`, `const` also has block scope. However, it is important to note that while the variable itself cannot be reassigned, if it is an object or an array, the contents of the object or array can still be modified.
// Example of `const`:
// const name = "Alice";
// name = "Bob"; // This will throw an error
// const numbers = [1, 2, 3];
// numbers.push(4); // This is valid, as we are modifying the contents of the array, not reassigning the variable itself.