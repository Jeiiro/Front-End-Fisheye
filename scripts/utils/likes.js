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
}
