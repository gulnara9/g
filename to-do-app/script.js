let todoInput = document.querySelector("#todo-input");
let addTodo = document.querySelector(".btn-primary");
let todoList = document.querySelector(".list-group");

addTodo.setAttribute("disabled", null);
addTodo.disabled = true;

todoInput.addEventListener("input", function (event) {
  if (event.target.value) {
    addTodo.disabled = false;
  } else {
    addTodo.disabled = true;
  }
});

addTodo.addEventListener("click", createTodo);

window.addEventListener("keyup", function (event) {
  //   console.log(event.code);

  if (event.code === "Enter") {
    createTodo();
  }
});

function createTodo() {
  todoList.innerHTML += `
    <li
    class="list-group-item list-group-item-success my-2 d-flex justify-content-between align-items-center rounded"
  >
    <span>${todoInput.value}</span>
    <div>
      <button type="button" class="btn btn-success">Edit</button>
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </li>
    `;

  let allDeleteBtns = document.querySelectorAll(".btn-danger");

  allDeleteBtns.forEach((item) => {
    item.addEventListener("click", function () {
      this.closest("li").remove();
    });
  });

  let allEditBtns = document.querySelectorAll(".btn-success");

  allEditBtns.forEach((item) => {
    item.addEventListener("click", function () {
      let todoText = this.closest("li").querySelector("span");
      let toDoInput = document.createElement("input");
      toDoInput.type = "text";
      toDoInput.value = todoText.innerText;

      todoText.innerHTML = "";
      todoText.appendChild(toDoInput);
      toDoInput.addEventListener("focus", function () {
        item.disabled = "true";
        let saveBtn = document.createElement("button");
        saveBtn.type = "button";
        saveBtn.classList.add("btn", "btn-success", "mx-2");
        saveBtn.innerText = "Save";
        this.parentElement.appendChild(saveBtn);

        saveBtn.addEventListener("click", function () {
          this.remove();
          todoText.innerText = toDoInput.value;
        });
      });
      //   item.disabled = "false";
    });
  });

  todoInput.value = "";
  addTodo.disabled = true;
}
