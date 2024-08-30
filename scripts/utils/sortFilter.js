// eslint-disable-next-line no-unused-vars
let currentSort = "date";
// Fonction asynchrone pour filtrer et trier les médias en fonction des critères sélectionnés
// eslint-disable-next-line no-unused-vars
async function filter(data) {
  const dropdownButton = document.querySelector(".dropdown_button");
  const dropdownList = document.querySelector(".dropdown_list");
  const dropdownValue = document.querySelector(".dropdown_value");
  const params = new URL(document.location).searchParams;
  const id = params.get("id");
  const mediaArray = [];
   // Filtrer les médias en fonction de l'ID du photographe
  data.forEach((data) => {
    if (id == data.photographerId) {
      const { id, photographerId, title, image, likes, date, price, video } =
        data;
      const arrayItems = [
        id,
        photographerId,
        title,
        image,
        likes,
        date,
        price,
        video,
      ];
      mediaArray.push(arrayItems);
    }
  });
// Trier les médias par date, du plus récent au plus ancien
  mediaArray.sort((a, b) => new Date(b[5]) - new Date(a[5]));
    // Fonction pour convertir un tableau en objet média
  function arrayItemsToMediaObject(array) {
    return {
      id: array[0],
      photographerId: array[1],
      title: array[2],
      image: array[3],
      likes: array[4],
      date: array[5],
      price: array[6],
      video: array[7],
    };
  }
// Fonction pour trier les médias en fonction du critère choisi
  function sortAndDisplay(sortBy) {
    currentSort = sortBy;
    if (mediaArray.length === 0) return [];
    mediaArray.sort((a, b) => {
      if (sortBy === "likes") {
        return b[4] - a[4];
      } else if (sortBy === "date") {
        return new Date(b[5]) - new Date(a[5]);
      } else if (sortBy === "title") {
        return a[2].localeCompare(b[2]);
      }
    });

    return mediaArray;
  }
// Configurer les attributs d'accessibilité pour le bouton du dropdown
  dropdownButton.setAttribute("aria-haspopup", "true");
  dropdownButton.setAttribute("aria-expanded", "false");
  dropdownButton.setAttribute("aria-controls", "dropdown_list");
  // Ajouter un événement de clic pour afficher/masquer la liste déroulante
  dropdownButton.addEventListener("click", () => {
    const isExpanded = dropdownButton.getAttribute("aria-expanded") === "true";
    dropdownList.classList.toggle("show");
    dropdownButton.classList.toggle("hide");
    dropdownButton.setAttribute("aria-expanded", !isExpanded);
  });
// Ajouter des événements de clic et de touche pour chaque élément de la liste déroulante
  document.querySelectorAll(".dropdown_item").forEach((item) => {
    item.setAttribute("role", "option");
    item.addEventListener("click", (e) => {
      const selectedSort = e.target.id;
      let sortedMediaArray;

      if (selectedSort === "popularity") {
        sortedMediaArray = sortAndDisplay("likes");
        dropdownValue.textContent = "Popularité";
      } else if (selectedSort === "date") {
        sortedMediaArray = sortAndDisplay("date");
        dropdownValue.textContent = "Date";
      } else if (selectedSort === "title") {
        sortedMediaArray = sortAndDisplay("title");
        dropdownValue.textContent = "Titre";
      }
  // Afficher les médias triés
      if (sortedMediaArray) {
        // eslint-disable-next-line no-undef
        displayDataMedia(sortedMediaArray.map(arrayItemsToMediaObject));
        // eslint-disable-next-line no-undef
        displayMedia();
      }
       // Masquer la liste déroulante et réinitialiser l'état du bouton
      dropdownList.classList.toggle("show");
      dropdownButton.classList.toggle("hide");
      dropdownButton.setAttribute("aria-expanded", "false");
    });
    // Ajouter un événement de touche pour permettre la sélection avec la touche "Enter"
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const selectedSort = e.target.id;
        let sortedMediaArray;

        if (selectedSort === "popularity") {
          sortedMediaArray = sortAndDisplay("likes");
          dropdownValue.textContent = "Popularité";
        } else if (selectedSort === "date") {
          sortedMediaArray = sortAndDisplay("date");
          dropdownValue.textContent = "Date";
        } else if (selectedSort === "title") {
          sortedMediaArray = sortAndDisplay("title");
          dropdownValue.textContent = "Titre";
        }
// Afficher les médias triés
        if (sortedMediaArray) {
          // eslint-disable-next-line no-undef
          displayDataMedia(sortedMediaArray.map(arrayItemsToMediaObject));
          // eslint-disable-next-line no-undef
          displayMedia();
        }
    // Masquer la liste déroulante et réinitialiser l'état du bouton
        dropdownList.classList.toggle("show");
        dropdownButton.classList.toggle("hide");
        dropdownButton.setAttribute("aria-expanded", "false");
      }
    });
  });
// Afficher les médias filtrés et triés initialement
  // eslint-disable-next-line no-undef
  displayDataMedia(mediaArray.map(arrayItemsToMediaObject));
  // eslint-disable-next-line no-undef
  displayMedia();
}
