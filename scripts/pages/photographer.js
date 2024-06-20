async function getPhotographers() {
  let photographers = [];
  const responsePhotographers = await fetch("data/photographers.json");
  const dataPhotographers = await responsePhotographers.json();
  photographers = dataPhotographers.photographers;

  return {
    photographers,
  };
}
async function getMedia() {
  let media = [];
  const responseMedia = await fetch("data/photographers.json");
  const dataMedia = await responseMedia.json();
  media = dataMedia.media;

  return {
    media,
  };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photograph-header");
  const params = new URL(document.location).searchParams;
  const id = params.get("id");
  photographers.forEach((photographer) => {
    if (id == photographer.id) {
      const photographerModel = photographerTemplatePageHeader(photographer);
      const userPageDOM = photographerModel.getUserPageDOM();
    }
  });
}
async function displayDataMedia(media) {
  const mediaSection = document.querySelector(".photographer_media");
  mediaSection.innerHTML = "";
  const params = new URL(document.location).searchParams;
  const id = params.get("id");
  media.forEach((media) => {
    if (id == media.photographerId) {
      const mediaModel = photographerTemplatePageMedia(media);
      const userMedia = mediaModel.getUserMediaDOM();
      mediaSection.appendChild(userMedia);
    }
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  const { media } = await getMedia();
  await filter(media);
  displayData(photographers);
}

init();
