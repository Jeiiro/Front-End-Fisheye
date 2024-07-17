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
  let tabindexCounter = 4;
  media.forEach((media) => {
    if (id == media.photographerId) {
      const mediaModel = photographerTemplatePageMedia(media, tabindexCounter);
      const userMedia = mediaModel.getUserMediaDOM();
      mediaSection.appendChild(userMedia);
      tabindexCounter++;
    }
  });
}
async function displayTotalLikes() {
  let totalLikes = 0;
  let likes = document.querySelectorAll(".likes");
  likes.forEach((like) => {
    totalLikes += parseInt(like.textContent);
  });
  const heart = "/assets/icons/heart-solid.svg";
  const container = document.getElementById("like_counter_and_price");
  const contain = document.createElement("div");
  contain.setAttribute("id", "like_counter");
  const likeCounter = document.createElement("p");
  likeCounter.textContent = totalLikes;
  likeCounter.setAttribute("id", "total_likes");
  const likeIcon = document.createElement("img");
  likeIcon.setAttribute("src", heart);
  contain.appendChild(likeCounter);
  contain.appendChild(likeIcon);
  container.appendChild(contain);
}
async function displayPricePerDay(photographers) {
  const pricePerDay = document.getElementById("price_per_day");
  const params = new URL(document.location).searchParams;
  const id = params.get("id");
  let photographerPrice = 0;
  photographers.forEach((photographers) => {
    if (id == photographers.id) {
      photographerPrice = photographers.price;
    }
  });
  const container = document.getElementById("like_counter_and_price");
  const pricePerDayText = document.createElement("p");
  pricePerDayText.textContent = `${photographerPrice}€ / jour`;
  container.appendChild(pricePerDayText);
}

async function init() {
  const { photographers } = await getPhotographers();
  const { media } = await getMedia();

  await displayData(photographers);
  await filter(media);
  await displayTotalLikes();
  await displayPricePerDay(photographers);
}

init();
