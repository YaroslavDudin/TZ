const myBtn = document.getElementById("btn-open-modal");
const modal = document.getElementById("modal");

myBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
  myBtn.style.display = "none";
});

document.getElementById("btn-close").addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  myBtn.style.display = "block";
});
// во втором способе я просто добавляю к элементу active
