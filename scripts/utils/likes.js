function toggleLikes(e) {
  let likesCount = e.previousElementSibling;
  let currentLikesCount = parseInt(likesCount.textContent);
  if (e.classList.contains("liked")) {
    likesCount.textContent = currentLikesCount - 1;
    likesCount.classList.remove("liked");
    e.classList.remove("liked");
    const totalLikesCount = document.getElementById("total_likes");
    const totalLikesCountNumber = parseInt(totalLikesCount.textContent);
    totalLikesCount.textContent = totalLikesCountNumber - 1;
  } else {
    likesCount.textContent = currentLikesCount + 1;
    likesCount.classList.add("liked");
    e.classList.add("liked");
    const totalLikesCount = document.getElementById("total_likes");
    const totalLikesCountNumber = parseInt(totalLikesCount.textContent);
    totalLikesCount.textContent = totalLikesCountNumber + 1;
  }
  updateMediaDisplay();
}
function getMediaLikes() {
  const mediaElements = document.querySelectorAll(".media");
  const mediaLikes = [];

  mediaElements.forEach((media) => {
    const likeContainer = media.querySelector(".like_container");
    const likesElement = likeContainer.querySelector("p");
    const likes = parseInt(likesElement.textContent, 10);

    mediaLikes.push({
      media: media,
      likes: likes,
    });
  });

  return mediaLikes;
}

function sortMediaByLikes(mediaLikes) {
  return mediaLikes.sort((a, b) => b.likes - a.likes);
}

function displaySortedMedia(mediaLikes) {
  const mediaContainer = document.querySelector(".photographer_media");

  mediaContainer.innerHTML = "";

  mediaLikes.forEach((item) => {
    mediaContainer.appendChild(item.media);
  });
}

function updateMediaDisplay() {
  const mediaLikes = getMediaLikes();
  const sortedMedia = sortMediaByLikes(mediaLikes);
  displaySortedMedia(sortedMedia);
}
