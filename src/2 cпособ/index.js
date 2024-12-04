const myBtn = document.getElementById("btn-open-modal");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("btn-close");

myBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.querySelector(".modal").classList.add("active");
  myBtn.classList.add("hidden");
});

closeModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.querySelector(".modal").classList.remove("active");
  myBtn.classList.remove("hidden");
});
