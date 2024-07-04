let currentIndex = 0;
let mediaElements;

function displayLightbox() {
  const lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "block";
  const main = document.querySelector("#main");
  main.style.display = "none";
}

function closeLightbox() {
  const lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "none";
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
}

async function displayMedia() {
  mediaElements = document.querySelectorAll(".media_access");
  mediaElements.forEach((media, index) => {
    media.addEventListener("click", () => {
      currentIndex = index;
      if (media.localName === "img") {
        const src = media.src;
        const lightbox = document.querySelector(".media_zoom");
        const lightboxImage = document.createElement("img");
        lightboxImage.setAttribute("src", src);
        lightboxImage.setAttribute("class", "lightbox_img");
        lightbox.appendChild(lightboxImage);
        displayLightbox();
      } else if (media.localName === "video") {
        const src = media.src;
        const lightbox = document.querySelector(".media_zoom");
        const lightboxImage = document.createElement("video");
        lightboxImage.setAttribute("src", src);
        lightboxImage.setAttribute("class", "lightbox_video");
        lightboxImage.setAttribute("controls", "controls");
        lightbox.appendChild(lightboxImage);
        displayLightbox();
      }
    });
  });
}
function showPrev() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : mediaElements.length - 1;
  updateLightbox();
}

function showNext() {
  currentIndex = currentIndex < mediaElements.length - 1 ? currentIndex + 1 : 0;
  updateLightbox();
}

function updateLightbox() {
  const lightbox = document.querySelector(".media_zoom");
  const lightboxMedia =
    document.querySelector(".lightbox_img") ||
    document.querySelector(".lightbox_video");
  if (lightboxMedia) {
    lightboxMedia.remove();
  }

  const media = mediaElements[currentIndex];
  if (media.localName === "img") {
    const src = media.src;
    const lightboxImage = document.createElement("img");
    lightboxImage.setAttribute("src", src);
    lightboxImage.setAttribute("class", "lightbox_img");
    lightbox.appendChild(lightboxImage);
  } else if (media.localName === "video") {
    const src = media.src;
    const lightboxVideo = document.createElement("video");
    lightboxVideo.setAttribute("src", src);
    lightboxVideo.setAttribute("class", "lightbox_video");
    lightboxVideo.setAttribute("controls", "controls");
    lightbox.appendChild(lightboxVideo);
  }
}
