const pageContainer = document.getElementById("pageContainer");
let categories = [
    {
        "fileHTML": "experienceWeightlessness",
        "title": "Experimenta la ingravidez",
        "description": "La empresa Zero G ofrece vuelos suborbitales en los que podrás experimentar la ingravidez. Para lograrlo utilizan un Boeing 727 modificado que vuela en arcos parabólicos. La caída en picado permite disfrutar de 20-30 segundos sin peso durante unas 15 veces.",
        "image": require("../img/original/experienceWeightlessness.webp"),
        "image200": require("../img/200/experienceWeightlessness_200.webp"),
        "image400": require("../img/400/experienceWeightlessness_400.webp"),
        "image600": require("../img/600/experienceWeightlessness_600.webp"),
        "image800": require("../img/800/experienceWeightlessness_800.webp"),
        "alt": "Turistas en el A310"
    },
    {
        "fileHTML": "suborbitalFlights",
        "title": "Vuelos suborbitales",
        "description": "Existen aviones que, aunque no lleguen hasta el espacio, sí vuelan lo suficientemente alto como para percibir la curvatura de la Tierra. Diversas empresas rusas ofrecen vuelos supersónicos para civiles. Para ello, utilizan aviones MIG-29, uno d elos pocos jets que pueden acelerar verticalmente como los cohetes.",
        "image": require("../img/original/suborbitalFlights.webp"),
        "image200": require("../img/200/suborbitalFlights_200.webp"),
        "image400": require("../img/400/suborbitalFlights_400.webp"),
        "image600": require("../img/600/suborbitalFlights_600.webp"),
        "image800": require("../img/800/suborbitalFlights_800.webp"),
        "alt": "Piloto del MIG-2"
    },
    {
        "fileHTML": "virginGalactic",
        "title": "Vuelos espaciales de Virgen Galactic",
        "description": "La compañía estadounidense Virgen Galactic del magnate Richard Branson, ofrece vuelos suborbitales que prometen alcanzar el límite del espacio. Este límite se encuentra a unos 100 km de altura en lo que se conoce como la línea de Kármán.",
        "image": require("../img/800/virginGalactic_800.webp"),
        "image200": require("../img/200/virginGalactic_200.webp"),
        "image400": require("../img/400/virginGalactic_400.webp"),
        "image600": require("../img/600/virginGalactic_600.webp"),
        "image800": require("../img/800/virginGalactic_800.webp"),
        "alt": "Aeronave Virgin Galactic"
    },
    {
        "fileHTML": "spaceStation",
        "title": "Visita la Estación Espacial",
        "description": "Más de 200 personas han visitado la Estación Espacial Internacional hasta la fecha. Sin embargo, solo 7 civiles afortunados (y adinerados) han cumplido este sueño.",
        "image": require("../img/original/spaceStation.webp"),
        "image200": require("../img/200/spaceStation_200.webp"),
        "image400": require("../img/400/spaceStation_400.webp"),
        "image600": require("../img/600/spaceStation_600.webp"),
        "image800": require("../img/800/spaceStation_800.webp"),
        "alt": "Estación espacial"
    }
]

categories.forEach((category) => {
    renderCategory(category);
});

function renderCategory(category) {
    let categoryPage = createElement("div");

    let categoryName = createElement("h4", "anim-title", category.title)
    categoryPage.append(categoryName);

    let divImage = createElement("div")
    let categoryImage = createElement("img", "multimedia");
    categoryImage.src = category.image;
    categoryImage.alt = category.alt;
    categoryImage.loading = "lazy";
    categoryImage.srcset = category.image200 + " 200w," + category.image400 + " 400w," + category.image600 + " 600w," + category.image800 + " 800w"
    categoryImage.sizes = "(max-width:320px) 180px, (max-width:480px) 230px, (max-width:800px) 380px, (max-width:1024px) 590px, 650px"
    divImage.append(categoryImage)
    categoryPage.append(divImage)

    let categoryDescription = createElement("p", null, category.description)
    categoryPage.append(categoryDescription);

    let categoryLinkP = createElement("p");

    let categoryLink = createElement("a", "links");
    categoryLink.href = `${category.fileHTML}.html`;
    categoryLink.innerHTML = 'Más información';

    categoryLinkP.append(categoryLink)
    categoryPage.append(categoryLinkP)

    // categoryLink.append(categoryPage)

    pageContainer.append(categoryPage);
}

function createElement(tag, className, content) {
    const element = document.createElement(tag);

    if (className) element.classList.add(className);

    if (content) element.innerHTML = content;

    return element;
}
