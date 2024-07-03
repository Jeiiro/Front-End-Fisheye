function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  const main = document.getElementById("main");
  main.style.opacity = "0.5";
  const formTitle = document.getElementById("form_title");
  const photographerName = document.querySelector(".photographer_name");
  formTitle.innerHTML += " " + photographerName.textContent;
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  const main = document.getElementById("main");
  main.style.opacity = "1";
}
