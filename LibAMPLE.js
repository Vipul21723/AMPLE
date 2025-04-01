const searchInput = document.querySelector("header .sub-header .container input");
const searchIcon = document.querySelector("header .sub-header .container .icon");

searchIcon.addEventListener("click", function() {
  searchInput.classList.toggle("show");
  searchIcon.style.display = "none"
});

function cancel() { // Fixed typo
  document.querySelector('.message-alert').style.display = "none";
  document.getElementsByTagName("main")[0].style.display = "flex";

}
