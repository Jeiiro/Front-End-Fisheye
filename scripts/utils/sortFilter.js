async function filter(data) {
  const dropdownButton = document.querySelector(".dropdown_button");
  const dropdownList = document.querySelector(".dropdown_list");
  const dropdownValue = document.querySelector(".dropdown_value");
  const params = new URL(document.location).searchParams;
  const id = params.get("id");
  const mediaArray = [];
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

  mediaArray.sort((a, b) => new Date(b[5]) - new Date(a[5]));
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

  function sortAndDisplay(sortBy) {
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

  dropdownButton.addEventListener("click", () => {
    dropdownList.classList.toggle("show");
    dropdownButton.classList.toggle("hide");
  });

  document.querySelectorAll(".dropdown_item").forEach((item) => {
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

      if (sortedMediaArray) {
        displayDataMedia(sortedMediaArray.map(arrayItemsToMediaObject));
        displayMedia();
      }
      dropdownList.classList.toggle("show");
      dropdownButton.classList.toggle("hide");
    });
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

        if (sortedMediaArray) {
          displayDataMedia(sortedMediaArray.map(arrayItemsToMediaObject));
          displayMedia();
        }

        dropdownList.classList.toggle("show");
        dropdownButton.classList.toggle("hide");
      }
    });
  });

  displayDataMedia(mediaArray.map(arrayItemsToMediaObject));
  displayMedia();
}
