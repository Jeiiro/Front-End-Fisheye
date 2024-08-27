// Fonction pour obtenir la liste des photographes depuis le fichier JSON
async function getPhotographers() {
  let photographers = [];
  const responsePhotographers = await fetch("data/photographers.json");
  const dataPhotographers = await responsePhotographers.json();
  photographers = dataPhotographers.photographers;

  return { photographers };
}
// Fonction pour obtenir la liste des médias depuis le fichier JSON
async function getMedia() {
  let media = [];
  const responseMedia = await fetch("data/photographers.json");
  const dataMedia = await responseMedia.json();
  media = dataMedia.media;

  return { media };
}
// Fonction pour afficher les données du photographe sur la page
async function displayData(photographers) {
  const params = new URL(document.location).searchParams;
  const id = params.get("id");
  // Trouver le photographe correspondant à l'ID et afficher ses informations
  photographers.forEach((photographer) => {
    if (id == photographer.id) {
      // eslint-disable-next-line no-undef
      const photographerModel = photographerTemplatePageHeader(photographer);
      const photographerDOM = photographerModel.getUserPageDOM();
      
      photographerDOM.setAttribute('role', 'banner');
      photographerDOM.setAttribute('aria-label', `Page de ${photographer.name}`);

    }
  });
}
// Fonction pour afficher les médias du photographe sur la page
async function displayDataMedia(media) {
  const mediaSection = document.querySelector(".photographer_media");
  mediaSection.innerHTML = "";
  const params = new URL(document.location).searchParams;
  const id = params.get("id");
  let tabindexCounter = 4;
  // Trouver et afficher les médias correspondant à l'ID du photographe
  media.forEach((item) => {
    if (id == item.photographerId) {
      // eslint-disable-next-line no-undef
      const mediaModel = photographerTemplatePageMedia(item, tabindexCounter);
      const userMedia = mediaModel.getUserMediaDOM();

      userMedia.setAttribute('role', 'group');
      userMedia.setAttribute('aria-label', `Média : ${item.title}`);


      mediaSection.appendChild(userMedia);
      tabindexCounter++;
    }
  });
}
// Fonction pour afficher le total des likes sur la page
async function displayTotalLikes() {
  let totalLikes = 0;
  // Calculer le total des likes en parcourant les éléments correspondants
  let likes = document.querySelectorAll(".likes");
  likes.forEach((like) => {
    totalLikes += parseInt(like.textContent);
  });
  const heart = "/assets/icons/heart-solid.svg";
  const container = document.getElementById("like_counter_and_price");
 // Créer et ajouter les éléments pour afficher le compteur de likes
  const contain = document.createElement("div");
  contain.setAttribute("id", "like_counter");
  contain.setAttribute("role", "status");
  contain.setAttribute("aria-live", "polite");

  const likeCounter = document.createElement("p");
  likeCounter.textContent = totalLikes;
  likeCounter.setAttribute("id", "total_likes");

  const likeIcon = document.createElement("img");
  likeIcon.setAttribute("src", heart);
  likeIcon.setAttribute("alt", "Icône de coeur pour les likes");

  contain.appendChild(likeCounter);
  contain.appendChild(likeIcon);
  container.appendChild(contain);
}
// Fonction pour afficher le prix par jour du photographe sur la page
async function displayPricePerDay(photographers) {
  const params = new URL(document.location).searchParams;
  const id = params.get("id");
  let photographerPrice = 0;
  photographers.forEach((photographer) => {
    if (id == photographer.id) {
      photographerPrice = photographer.price;
    }
  });
  // Créer et ajouter l'élément pour afficher le prix par jour
  const container = document.getElementById("like_counter_and_price");
  const pricePerDayText = document.createElement("p");
  pricePerDayText.textContent = `${photographerPrice}€ / jour`;
  pricePerDayText.setAttribute("aria-label", `Prix par jour : ${photographerPrice} euros`);

  container.appendChild(pricePerDayText);
}
// Fonction d'initialisation de la page
async function init() {
  const { photographers } = await getPhotographers();
  const { media } = await getMedia();
// Afficher les données du photographe et des médias, puis filtrer et afficher les likes et le prix
  await displayData(photographers);
  await displayDataMedia(media);
  // eslint-disable-next-line no-undef
  await filter(media);
  await displayTotalLikes();
  await displayPricePerDay(photographers);
}

init();