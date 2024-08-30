// Variable pour suivre l'index actuel de l'élément média affiché dans la lightbox
let currentIndex = 0;
let mediaElements;
// Fonction pour afficher la lightbox
function displayLightbox() {
  const lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "block";
  lightbox.setAttribute("aria-hidden", "false");
  lightbox.setAttribute("aria-labelledby", "lightbox_title");
  const main = document.querySelector("#main");
  main.style.display = "none";
}
// Fonction pour fermer la lightbox
function closeLightbox() {
  const lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "none";
  lightbox.setAttribute("aria-hidden", "true");
  const main = document.querySelector("#main");
  main.style.display = "block";
  const lightboxImage = document.querySelector(".lightbox_img");
  if (lightboxImage) {
    lightboxImage.remove();
  }
  const lightboxVideo = document.querySelector(".lightbox_video");
  if (lightboxVideo) {
    lightboxVideo.remove();
  }
  const lightboxTitle = document.querySelector(".title_picture_zoom");
  if (lightboxTitle) {
    lightboxTitle.remove();
  }
}
// Fonction pour afficher les éléments médias dans la lightbox
// eslint-disable-next-line no-unused-vars
async function displayMedia() {
  mediaElements = document.querySelectorAll(".media");
  console.log("mediaElements", mediaElements);
  mediaElements.forEach((media, index) => {     
    media.firstChild.addEventListener("click", () => {
      currentIndex = index;
 
      if (media.firstChild.localName === "img") {
        console.log("media.children.localName");
        const src = media.firstChild.src;
        const alt = media.firstChild.alt;
        const title = media.lastChild.firstChild.innerHTML;
        const lightbox = document.querySelector(".media_zoom");
        const lightboxImage = document.createElement("img");
        const lightboxImageTitle = document.createElement("p");
        lightboxImageTitle.textContent = title;
        lightboxImageTitle.setAttribute("class", "title_picture_zoom");
        lightboxImage.setAttribute("src", src);
        lightboxImage.setAttribute("class", "lightbox_img");
        lightboxImage.setAttribute("alt", alt);
        lightboxImage.setAttribute("tabindex", 0);
        lightbox.appendChild(lightboxImage);
        lightbox.appendChild(lightboxImageTitle);
        displayLightbox();
        eventListenerLightbox();
      } else if (media.firstChild.localName === "video") {
        const src = media.firstChild.src;
        const alt = media.firstChild.alt;
        const title = media.lastChild.firstChild.innerHTML;
        const lightbox = document.querySelector(".media_zoom");
        const lightboxImage = document.createElement("video");
        const lightboxImageTitle = document.createElement("p");
        lightboxImageTitle.textContent = title;
        lightboxImageTitle.setAttribute("class", "title_picture_zoom");
        lightboxImage.setAttribute("src", src);
        lightboxImage.setAttribute("class", "lightbox_video");
        lightboxImage.setAttribute("controls", "controls");
        lightboxImage.setAttribute("alt", alt);
        lightboxImage.setAttribute("tabindex", 0);
        lightbox.appendChild(lightboxImage);
        lightbox.appendChild(lightboxImageTitle);
        displayLightbox();
        eventListenerLightbox();
      }
    });
  });
  mediaElements.forEach((media, index) => {
    media.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        currentIndex = index;
        if (media.firstChild.localName === "img") {
          const src = media.firstChild.src;
          const alt = media.firstChild.alt;
          const title = media.lastChild.firstChild.innerHTML;
          const lightbox = document.querySelector(".media_zoom");
          const lightboxImage = document.createElement("img");
          const lightboxImageTitle = document.createElement("p");
          lightboxImageTitle.textContent = title;
          lightboxImageTitle.setAttribute("class", "title_picture_zoom");
          lightboxImage.setAttribute("src", src);
          lightboxImage.setAttribute("class", "lightbox_img");
          lightboxImage.setAttribute("alt", alt);
          lightboxImage.setAttribute("tabindex", 0);
          lightbox.appendChild(lightboxImage);
          lightbox.appendChild(lightboxImageTitle);
          displayLightbox();
          eventListenerLightbox();
        } else if (media.firstChild.localName === "video") {
          const src = media.firstChild.src;
          const alt = media.firstChild.alt;
          const title = media.lastChild.firstChild.innerHTML;
          const lightbox = document.querySelector(".media_zoom");
          const lightboxImage = document.createElement("video");
          const lightboxImageTitle = document.createElement("p");
          lightboxImageTitle.textContent = title;
          lightboxImageTitle.setAttribute("class", "title_picture_zoom");
          lightboxImage.setAttribute("src", src);
          lightboxImage.setAttribute("class", "lightbox_video");
          lightboxImage.setAttribute("controls", "controls");
          lightboxImage.setAttribute("alt", alt);
          lightboxImage.setAttribute("tabindex", 0);
          lightbox.appendChild(lightboxImage);
          lightbox.appendChild(lightboxImageTitle);
          displayLightbox();
          eventListenerLightbox();
        }
      }
    });
  });
}
// Fonction pour afficher le média précédent dans la lightbox
function showPrev() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : mediaElements.length - 1;
  updateLightbox();
}
// Fonction pour afficher le média suivant dans la lightbox
function showNext() {
  currentIndex = currentIndex < mediaElements.length - 1 ? currentIndex + 1 : 0;
  updateLightbox();
}
// Fonction pour mettre à jour le contenu de la lightbox avec le média actuel
function updateLightbox() {
  const lightbox = document.querySelector(".media_zoom");
  const lightboxMedia =
    document.querySelector(".lightbox_img") ||
    document.querySelector(".lightbox_video");
  const lightboxImageTitle = document.querySelector(".title_picture_zoom"); 
  console.log(lightboxImageTitle);
  if (lightboxMedia) {
    lightboxMedia.remove();
  }
  if (lightboxImageTitle) {
    lightboxImageTitle.remove();
  }

  const media = mediaElements[currentIndex];
  if (media.firstChild.localName === "img") {
    const src = media.firstChild.src;
    const alt = media.firstChild.alt;
    const title = media.lastChild.firstChild.innerHTML;
    const lightboxImage = document.createElement("img");
    const lightboxImageTitle = document.createElement("p");
    lightboxImageTitle.textContent = title;
    lightboxImageTitle.setAttribute("class", "title_picture_zoom");
    lightboxImage.setAttribute("src", src);
    lightboxImage.setAttribute("class", "lightbox_img");
    lightboxImage.setAttribute("alt", alt);
    lightboxImage.setAttribute("tabindex", 0);
    lightbox.appendChild(lightboxImage);
    lightbox.appendChild(lightboxImageTitle);
  } else if (media.firstChild.localName === "video") {
    const src = media.firstChild.src;
    const alt = media.firstChild.alt;
    const title = media.lastChild.firstChild.innerHTML;
    const lightboxVideo = document.createElement("video");
    const lightboxImageTitle = document.createElement("p");
    lightboxImageTitle.textContent = title;
    lightboxImageTitle.setAttribute("class", "title_picture_zoom");
    lightboxVideo.setAttribute("src", src);
    lightboxVideo.setAttribute("class", "lightbox_video");
    lightboxVideo.setAttribute("controls", "controls");
    lightboxVideo.setAttribute("alt", alt);
    lightboxVideo.setAttribute("tabindex", 0);
    lightbox.appendChild(lightboxVideo);
    lightbox.appendChild(lightboxImageTitle);
  }
}
// Fonction pour ajouter des écouteurs d'événements à la lightbox
function eventListenerLightbox() {
  const lightbox = document.querySelector(".lightbox");
  if (lightbox.style.display == "block") {
    const closeIcon = document.querySelector(".close_icon_lightbox");
    const prevArrow = document.querySelector(".prev_arrow_icon_lightbox");
    const nextArrow = document.querySelector(".next_arrow_icon_lightbox");

    closeIcon.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        closeLightbox();
      }
    });

    prevArrow.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        showPrev();
      }
    });

    nextArrow.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        showNext();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        showNext();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      }
    });
  }
}
