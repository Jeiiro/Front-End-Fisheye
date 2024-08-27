// Modèle pour créer une carte de photographe à partir des données fournies
// eslint-disable-next-line no-unused-vars
function photographerTemplate(data, tabindexStart) {
  const { name, portrait, id, city, country, tagline, price } = data;
  const picture = `assets/photographers/${portrait}`;
 // Fonction pour générer le DOM de la carte du photographe
  function getUserCardDOM() {
    const article = document.createElement("article");
    const lien = document.createElement("a");
    lien.setAttribute("class", "photographer_container");
    lien.setAttribute("id", id);
    lien.setAttribute("tabindex", tabindexStart);
    lien.setAttribute("role", "link");
    lien.setAttribute("aria-label", `Voir la page de ${name}`);
    
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `Portrait de ${name}, ${city}, ${country}`);
    
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
// Assembler les éléments du DOM
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
// Modèle pour créer l'en-tête de la page du photographe
// eslint-disable-next-line no-unused-vars
function photographerTemplatePageHeader(data) {
  const { name, portrait, city, country, tagline } = data;
  const picture = `assets/photographers/${portrait}`;
 // Fonction pour générer le DOM de l'en-tête de la page du photographe
  function getUserPageDOM() {
    const header = document.querySelector(".photograph_header");
    const info = document.createElement("div");
    info.setAttribute("class", "photograph_info");
    
    const h1 = document.createElement("h1");
    h1.setAttribute("class", "photographer_name");
    h1.textContent = name;
    
    const location = document.createElement("p");
    location.textContent = `${city}, ${country}`;
    location.setAttribute("class", "location");
    
    const description = document.createElement("p");
    description.textContent = tagline;
    description.setAttribute("class", "description");
    
    const button = document.createElement("button");
    button.textContent = "Contactez-moi";
    button.setAttribute("class", "contact_button");
    button.setAttribute("aria-label", `Contactez ${name}`);
    button.setAttribute("onclick", "displayModal()");
    button.setAttribute("tabindex", "2");

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `Portrait de ${name}, ${city}, ${country}`);
 // Assembler les éléments du DOM
    header.appendChild(info);
    info.appendChild(h1);
    info.appendChild(location);
    info.appendChild(description);
    header.appendChild(button);
    header.appendChild(img);

    return header;
  }

  return { getUserPageDOM };
}
// Modèle pour créer une carte de média (photo ou vidéo) du photographe
// eslint-disable-next-line no-unused-vars
function photographerTemplatePageMedia(data, tabindexStart) {
  const { id, photographerId, title, image, likes, video } = data;
  const picture = `assets/images/${photographerId}/${image}`;
  const mp4 = `assets/images/${photographerId}/${video}`;
  const heart = `assets/icons/heart-solid.png`;
 // Fonction pour générer le DOM du média
  function getUserMediaDOM() {
    const media = document.createElement("article");
    media.setAttribute("id", id);
    media.setAttribute("class", "media");
// Si le média est une image
    if (image) {
      const photo = document.createElement("img");
      photo.setAttribute("src", picture);
      photo.setAttribute("class", "media_access");
      photo.setAttribute("alt", `Image ${title}, vue rapprochée`);
      photo.setAttribute("tabindex", tabindexStart);
      
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
      likeIcon.setAttribute("alt", "Icône de coeur pour les likes");
// Assembler les éléments du DOM pour une image
      media.appendChild(photo);
      media.appendChild(firstcontainer);
      firstcontainer.appendChild(name);
      firstcontainer.appendChild(secondcontainer);
      secondcontainer.appendChild(like);
      secondcontainer.appendChild(likeIcon);
// Si le média est une vidéo
    } else if (video) {
      const film = document.createElement("video");
      film.setAttribute("src", mp4);
      film.setAttribute("class", "media_access");
      film.setAttribute("alt", `Vidéo ${title}, vue rapprochée`);
      film.setAttribute("tabindex", tabindexStart);
      
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
      likeIcon.setAttribute("alt", "Icône de coeur pour les likes");
// Assembler les éléments du DOM pour une vidéo
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