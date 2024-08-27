// Fonction pour afficher la fenêtre modale de contact
// eslint-disable-next-line no-unused-vars
function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-labelledby", "form_title");
  modal.setAttribute("aria-modal", "true");

  const main = document.getElementById("main");
  main.style.opacity = "0.5";
  
  const formTitle = document.getElementById("form_title");
  const photographerName = document.querySelector(".photographer_name");
  formTitle.innerHTML = "Contactez " + photographerName.textContent;
  
  eventListenerModal();
}
// Fonction pour fermer la fenêtre modale de contact
function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  
  const main = document.getElementById("main");
  main.style.opacity = "1";
  
  const formTitle = document.getElementById("form_title");
  formTitle.innerHTML = "Contactez-moi";
  
  // Renvoyer le focus à l'élément qui a ouvert le modal (ajouter un focusable pour cela si nécessaire)
  returnFocus();
}

let form = document.getElementById("form");
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let mail = document.getElementById("mail");
let message = document.getElementById("message");
// Ajouter un écouteur d'événement pour la soumission du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Vérifier si tous les champs sont remplis
  if (
    firstName.value.trim() === "" ||
    lastName.value.trim() === "" ||
    mail.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    console.log("L'un des champs est vide !");
    // Assurer la gestion du message d'erreur pour les lecteurs d'écran
    alert("Tous les champs doivent être remplis avant de soumettre le formulaire.");
  } else {
    console.log("Formulaire soumis avec succès!");
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(mail.value);
    console.log(message.value);
    closeModal();
     // Réinitialiser les champs du formulaire
    firstName.value = "";
    lastName.value = "";
    mail.value = "";
    message.value = "";
    alert("Votre message a bien été envoyé!");
  }
});
// Fonction pour ajouter des écouteurs d'événements à la modale
function eventListenerModal() {
  let closeModalButton = document.querySelector(".close_icon_modal");
  // Ajouter un écouteur d'événement pour la touche "Enter" sur le bouton de fermeture
  closeModalButton.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      closeModal();
    }
  });

   // Mettre le focus sur le bouton de fermeture pour améliorer l'accessibilité
  closeModalButton.focus();
}
// Fonction pour renvoyer le focus à l'élément qui a ouvert la modale
function returnFocus() {
  const logo = document.querySelector("#logo");
  if (logo) {
    logo.focus();
  }
}