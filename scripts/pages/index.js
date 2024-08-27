// Fonction pour récupérer les photographes
async function getPhotographers() {
  let photographers = [];
  const responsePhotographers = await fetch("data/photographers.json");
  const dataPhotographers = await responsePhotographers.json();
  photographers = dataPhotographers.photographers;

  return {
    photographers,
  };
}

// Fonction pour afficher les données des photographes
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  let tabindexCounter = 2;

  photographers.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerModel = photographerTemplate(
      photographer,
      tabindexCounter
    );

    const userCardDOM = photographerModel.getUserCardDOM();

    
    photographersSection.appendChild(userCardDOM);
    tabindexCounter++;
  });
}

// Fonction d'initialisation
async function init() {
  const { photographers } = await getPhotographers();
  await displayData(photographers);
}

init();

// Fonction pour ouvrir la page du photographe au clic ou au clavier
async function openPhotographerPage() {
  await getPhotographers();
  const photographersContainer = document.querySelectorAll(".photographer_container");

  photographersContainer.forEach((photographer) => {
    photographer.addEventListener("click", () => {
      window.location.href = `photographer.html?id=${photographer.id}`;
    });

    photographer.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        window.location.href = `photographer.html?id=${photographer.id}`;
      }
    });

  });
}

openPhotographerPage();