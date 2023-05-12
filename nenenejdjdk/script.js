const BASE_URL = "http://localhost:8080/users";

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
                <a href="#" class="btn btn-warning btn-sm edit" onclick=fillInput("${element.id}")  href="edit.id=${element.id}",this>Edit</a></td>
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

formStudents.addEventListener("submit", async function (e) {
  e.preventDefault();
  createStudent();
  // alert("Student was created.");
});

///edit
let userId;;
async function fillInput(userId) {
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
  };  e.preventDefault();
  if (editStatus) {
   editStatus = false;
    await axios.put(`${BASE_URL}/${userId}`, obj);

    getAllData();
  } else {
    // e.preventDefault();

    await axios.post(BASE_URL, obj);
    getAllData();
  }
});
