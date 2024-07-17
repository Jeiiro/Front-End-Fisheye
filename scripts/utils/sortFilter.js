async function filter(data) {
  const filterSection = document.querySelector(".sort_media");
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

  filterSection.addEventListener("change", (e) => {
    let sortedMediaArray;
    if (e.target.value === "likes") {
      sortedMediaArray = sortAndDisplay("likes");
      console.log("likes");
    } else if (e.target.value === "date") {
      sortedMediaArray = sortAndDisplay("date");
      console.log("date");
    } else if (e.target.value === "title") {
      sortedMediaArray = sortAndDisplay("title");
      console.log("titre");
    }
    if (sortedMediaArray) {
      displayDataMedia(sortedMediaArray.map(arrayItemsToMediaObject));
      displayMedia();
    }
  });
  displayDataMedia(mediaArray.map(arrayItemsToMediaObject));
  displayMedia();
}
