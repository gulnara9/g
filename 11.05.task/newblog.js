let cards = document.querySelector(".cards");
let blogTitle = document.querySelector("#blog-title");
let blogBody = document.querySelector("#blog-body");
let form = document.querySelector("form");

///
let gettAllData = async () => {
  let response = await axios("http://localhost:8080/blogs");
  console.log(response.data);
};
gettAllData()
///
form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("das");
  let obj = {
    title: blogTitle.value,
    body: blogBody.value,
    author:option.value
  };
axios.post("http://localhost:8080/blogs",obj).then(()=>{
window.location = "home.html";
});

})