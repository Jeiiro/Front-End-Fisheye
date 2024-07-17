async function getPhotographers() {
  let photographers = [];
  const responsePhotographers = await fetch("data/photographers.json");
  const dataPhotographers = await responsePhotographers.json();
  photographers = dataPhotographers.photographers;

  return {
    photographers,
  };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  let tabindexCounter = 2;
  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(
      photographer,
      tabindexCounter
    );
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
    tabindexCounter++;
  });
}

async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();

async function openPhotographerPage() {
  const { photographers } = await getPhotographers();
  const photographersContainer = document.querySelectorAll(
    ".photographer_container"
  );
  photographersContainer.forEach((photographer) => {
    photographer.addEventListener("click", () => {
      console.log(photographer.id);
      window.location.href = `photographer.html?id=${photographer.id}`;
    });
  });
  photographersContainer.forEach((photographer) => {
    photographer.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        console.log(photographer.id);
        window.location.href = `photographer.html?id=${photographer.id}`;
      }
    });
  });
}

openPhotographerPage();
