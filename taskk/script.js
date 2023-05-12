const BASE_URL = "http://localhost:8080/users";
let search =document.querySelector('.search')
let tBody = document.querySelector("#student-list");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const card = document.querySelector("#card");
const formStudents = document.querySelector("#formStudents");

async function getAllData() {
  const res = await axios(BASE_URL);
  const data = await res.data;
  tBody.innerHTML = "";
  data.forEach((element) => {
    tBody.innerHTML += `
    <tr>
            <td>${element.firstname}</td>
            <td>${element.lastname}</td>
            <td>${element.email}</td>
            <td>${element.card}</td>
            <td>
                <a href="#" class="btn btn-warning btn-sm edit"  onclick=fillInput("${element.id}")  href="edit.id=${element.id}",this>Edit</a></td>
               <td> <a href="#" class="btn btn-danger btn-sm delete" onclick=deleteStudent("${element.id}",this) >Delete</a>
            </td>
            <td><a href="#" class="btn btn-info btn-sm detail">Detail</a></td></td>
            </tr>`;
  });
}
getAllData();
//delete
async function deleteStudent(userId) {
  await axios.delete(`${BASE_URL}/${userId}`);
  console.log("deleted");
  getAllData();
}
//create
async function createStudent() {
  const obj = {
    firstname: firstName.value,
    lastname: lastName.value,
    email: email.value,
    card: card.value,
  };

  await axios.post(BASE_URL, obj);
  getAllData();
}

// formStudents.addEventListener("submit", async function (e) {
//   e.preventDefault();
//   createStudent();
//   // alert("Student was created.");
// });

///edit
let editId;
async function fillInput(userId) {
  editStatus = true;
  editId = userId;
  console.log(editStatus);
  const res = await axios.get(`${BASE_URL}/${userId}`);
  const data = await res.data;
  firstName.value = data.firstname;
  lastName.value = data.lastname;
  email.value = data.email;
  card.value = data.card;
}

formStudents.addEventListener("submit", async function (e) {
  const obj = {
    firstname: firstName.value,
    lastname: lastName.value,
    email: email.value,
    card: card.value,
  };
  console.log(editStatus);
  e.preventDefault();
  if (editStatus) {
    editStatus = false;
    await axios.put(`${BASE_URL}/${editId}`, obj);

    getAllData();
  } else {
    await axios.post(BASE_URL, obj);
    getAllData();
  }
});
////search
search.addEventListener("input", function (e) {
  fetch(" http://localhost:8080/users")
    .then((res) => res.json())
    .then((data) => {
      let filteredStudents = data.filter((item) =>
        item.firstname
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );

      getAllData(filteredStudents);
    });
});