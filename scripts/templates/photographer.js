function photographerTemplate(data) {
  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const lien = document.createElement("a");
    lien.setAttribute("class", "photographer_container");
    lien.setAttribute("id", id);
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.setAttribute("class", "photographer_name");
    h2.textContent = name;
    const location = document.createElement("p");
    location.textContent = `${city}, ${country}`;
    location.setAttribute("class", "location");
    const description = document.createElement("p");
    description.textContent = tagline;
    description.setAttribute("class", "description");
    const prix = document.createElement("p");
    prix.textContent = `${price}€/jour`;
    prix.setAttribute("class", "prix");
    article.appendChild(lien);
    lien.appendChild(img);
    lien.appendChild(h2);
    article.appendChild(location);
    article.appendChild(description);
    article.appendChild(prix);
    return article;
  }
  return { getUserCardDOM };
}

function photographerTemplatePageHeader(data) {
  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserPageDOM() {
    const header = document.querySelector(".photograph-header");
    const info = document.createElement("div");
    info.setAttribute("class", "photograph-info");
    const h2 = document.createElement("h2");
    h2.setAttribute("class", "photographer_name");
    h2.textContent = name;
    const location = document.createElement("p");
    location.textContent = `${city}, ${country}`;
    location.setAttribute("class", "location");
    const description = document.createElement("p");
    description.textContent = tagline;
    description.setAttribute("class", "description");
    const button = document.createElement("button");
    button.textContent = "Contactez-moi";
    button.setAttribute("class", "contact_button");
    button.setAttribute("onclick", "displayModal()");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    header.appendChild(info);
    info.appendChild(h2);
    info.appendChild(location);
    info.appendChild(description);
    header.appendChild(button);
    header.appendChild(img);
    return header;
  }

  return { getUserPageDOM };
}
function photographerTemplatePageMedia(data) {
  const { id, photographerId, title, image, likes, date, price, video } = data;

  const picture = `assets/images/${photographerId}/${image}`;
  const mp4 = `assets/images/${photographerId}/${video}`;
  const heart = `assets/icons/heart-solid.png`;

  function getUserMediaDOM() {
    const media = document.createElement("div");
    media.setAttribute("id", id);
    media.setAttribute("class", "media");
    if (image) {
      const photo = document.createElement("img");
      photo.setAttribute("src", picture);
      const firstcontainer = document.createElement("div");
      firstcontainer.setAttribute("class", "info_container");
      const secondcontainer = document.createElement("div");
      secondcontainer.setAttribute("class", "like_container");
      const name = document.createElement("p");
      name.textContent = title;
      name.setAttribute("class", "title_picture");
      const like = document.createElement("p");
      like.textContent = likes;
      like.setAttribute("class", "likes");
      const likeIcon = document.createElement("img");
      likeIcon.setAttribute("class", "fav");
      likeIcon.setAttribute("onclick", "toggleLikes(this)");
      likeIcon.setAttribute("src", heart);
      media.appendChild(photo);
      media.appendChild(firstcontainer);
      firstcontainer.appendChild(name);
      firstcontainer.appendChild(secondcontainer);
      secondcontainer.appendChild(like);
      secondcontainer.appendChild(likeIcon);
    } else if (video) {
      const film = document.createElement("video");
      film.setAttribute("src", mp4);
      film.setAttribute("controls", "controls");
      const firstcontainer = document.createElement("div");
      firstcontainer.setAttribute("class", "info_container");
      const secondcontainer = document.createElement("div");
      secondcontainer.setAttribute("class", "like_container");
      const name = document.createElement("p");
      name.textContent = title;
      name.setAttribute("class", "title_picture");
      const like = document.createElement("p");
      like.textContent = likes;
      like.setAttribute("class", "likes");
      const likeIcon = document.createElement("img");
      likeIcon.setAttribute("class", "fav");
      likeIcon.setAttribute("onclick", "toggleLikes(this)");
      likeIcon.setAttribute("src", heart);
      media.appendChild(film);
      media.appendChild(firstcontainer);
      firstcontainer.appendChild(name);
      firstcontainer.appendChild(secondcontainer);
      secondcontainer.appendChild(like);
      secondcontainer.appendChild(likeIcon);
    }

    return media;
  }
  return { getUserMediaDOM };
}

