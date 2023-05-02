// //
const addBtn = document.querySelector(".btn");
const todoInput = document.querySelector("#todo-input");
const list = document.querySelector(".list-group");
let addTodo = document.querySelector(".btn-primary");

//disable add btn
addTodo.setAttribute("disabled", null);
addTodo.disabled = true;

todoInput.addEventListener("input", function (event) {
  if (event.target.value) {
    addTodo.disabled = false;
  } else {
    addTodo.disabled = true;
  }
});
//addbtn
addBtn.addEventListener("click", function () {
  if (todoInput.value !== "") {
    list.innerHTML += `
      <li class="list-group-item list-group-item-success my-2 d-flex justify-content-between align-items-center rounded">
        <span>${todoInput.value}</span>
        <div>
          <button type="button" class="btn btn-success">Edit</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </li>
    `;
    todoInput.value = "";
  }
});

//CLICK TO EDIT BTN

let allEditBtns = document.querySelectorAll(".btn-success");

allEditBtns.forEach((allEditBtns) => {
  item.addEventListener("click", function () {
    
    console.log(this.closest("li").children[0]);
    console.log(this.closest("li").firstElementChild);

    todoInput.value = this.closest("li").firstElementChild.innerText;
    todoInput.focus();
    this.closest("li").remove();
  });
});

todoInput.value = "";
addTodo.disabled = true;

// //add button
// addBtn.addEventListener("click", function () {
//   if (todoText !== "") {
//     // Create new list item
//     const newListItem = document.createElement("li");
//     newListItem.classList.add(
//       "list-group-item",
//       "d-flex",
//       "justify-content-between",
//       "align-items-center"
//     );
//     newListItem.innerHTML = `
//       <span>${todoText}</span>
//       <div>
//         <button class="btn btn-secondary edit-btn">Edit</button>
//       </div>
//     `;
//     list.appendChild(newListItem);
//     todoInput.value = "";
//   }
// });

// // Add event listener to edit button (using event delegation)
// list.addEventListener("click", function (event) {
//   if (event.target.classList.contains("edit-btn")) {
//     const listItem = event.target.closest(".list-group-item");
//     const textSpan = listItem.querySelector("span");
//     const editText = textSpan.textContent.trim();
//     textSpan.innerHTML = `<input type="text" class="form-control" value="${editText}"/>`;
//     const inputField = textSpan.querySelector("input");
//     inputField.focus();
//     inputField.setSelectionRange(0, editText.length); // Select all text
//     inputField.addEventListener("blur", function () {
//       textSpan.innerHTML = inputField.value.trim();
//     });
//     inputField.addEventListener("keyup", function (event) {
//       if (event.key === "Enter") {
//         textSpan.innerHTML = inputField.value.trim();
//       }
//     });
//   }
// });
