let cards = document.querySelector(".cards");

function listCards() {
  cards.innerHTML = "";
  fetch("http://localhost:8080/blogs")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        cards.innerHTML += `
           <div class="card mb-2">
              <h2 id="blog-title">${element.title}</h2>
              <p id="blog-desc">
                <b
                  >${element.body.slice(10, 50)}...
                  <a
                    href="details.html?id=${element.id}"
                    >read more</a
                  ></b
                >
              </p>
              <p id="author">Written by ${element.author}</p>
              <div class="buttons">
                <button type="button" class="delete-btn btn btn-danger" onclick=deleteCustomer("${
                  element.id
                }") id=${element.id} >
                  Delete
                </button>
                <button type="button" class="edit-btn btn btn-warning" onclick=editCustomer("${
                  element.id
                }") href="edit.html?id=${element.id}">
                  Edit
                </button>
              </div>
            </div>`;
      });
    });
}

listCards();

// function deleteCustomer(id) {
//   console.log(id);
//   fetch(`http://localhost:8080/blogs/${id}`, {
//     method: "DELETE",
//   }).then(() => {
//     listCards();
//   });
//   document.querySelector(`#${id}`).closest("div").remove();
// }

//delete
let gettAllData = async () => {
  let response = await axios("http://localhost:8080/blogs");
  console.log(response.data);
};
gettAllData();

let deleteCustomerById=async(id)=>{
    await axios.delete(`http://localhost:8080/blogs/${id}`);
}
deleteCustomerById()













// npm install -g json-server

// npx json-server --watch ./data/db.json --port 8080