function photographerTemplate(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const lien = document.createElement( 'a' );
        lien.setAttribute("href", "photographer.html");
        lien.setAttribute("id", "${id}");
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const location = document.createElement( 'p' );
        location.textContent = `${city}, ${country}`;
        location.setAttribute("class", "location");
        const description = document.createElement( 'p' );
        description.textContent = tagline;
        description.setAttribute("class", "description");
        const prix = document.createElement( 'p' );
        prix.textContent = `${price}€/jour`;
        prix.setAttribute("class", "prix");
        article.appendChild(lien);
        lien.appendChild(img);
        lien.appendChild(h2);
        article.appendChild(location);
        article.appendChild(description);
        article.appendChild(prix);
        return (article);
    }
    return {getUserCardDOM }
    
}