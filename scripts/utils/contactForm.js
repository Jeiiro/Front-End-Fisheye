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

let form = document.getElementById("form");
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let mail = document.getElementById("mail");
let message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    mail.value === "" ||
    message.value === ""
  ) {
    console.log("L'un des champs est vide !");
  } else {
    console.log("Formulaire soumis avec succès!");
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(mail.value);
    console.log(message.value);
    closeModal();
    firstName.value = "";
    lastName.value = "";
    mail.value = "";
    message.value = "";
    alert("Votre message a bien été envoyé!");
  }
});
