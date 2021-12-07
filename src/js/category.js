const pageContainer = document.getElementById("pageContainer");
let categories = [
    {
        "fileHTML": "experienceWeightlessness",
        "title": "Experimenta la ingravidez",
        "description": "La empresa Zero G ofrece vuelos suborbitales en los que podrás experimentar la ingravidez. Para lograrlo utilizan un Boeing 727 modificado que vuela en arcos parabólicos. La caída en picado permite disfrutar de 20-30 segundos sin peso durante unas 15 veces.",
        "image": require("../img/experienceWeightlessness.jpg"),
        "image200": require("../img/experienceWeightlessness_200.jpg"),
        "image400": require("../img/experienceWeightlessness_400.jpg"),
        "image600": require("../img/experienceWeightlessness_600.jpg"),
        "image800": require("../img/experienceWeightlessness_800.jpg"),
        "alt": "Turistas en el A310"
    },
    {
        "fileHTML": "suborbitalFlights",
        "title": "Vuelos suborbitales",
        "description": "Existen aviones que, aunque no lleguen hasta el espacio, sí vuelan lo suficientemente alto como para percibir la curvatura de la Tierra. Diversas empresas rusas ofrecen vuelos supersónicos para civiles. Para ello, utilizan aviones MIG-29, uno d elos pocos jets que pueden acelerar verticalmente como los cohetes.",
        "image": require("../img/suborbitalFlights.png"),
        "image200": require("../img/suborbitalFlights_200.png"),
        "image400": require("../img/suborbitalFlights_400.png"),
        "image600": require("../img/suborbitalFlights_600.png"),
        "image800": require("../img/suborbitalFlights_800.png"),
        "alt": "Piloto del MIG-2"
    },
    {
        "fileHTML": "virginGalactic",
        "title": "Vuelos espaciales de Virgen Galactic",
        "description": "La compañía estadounidense Virgen Galactic del magnate Richard Branson, ofrece vuelos suborbitales que prometen alcanzar el límite del espacio. Este límite se encuentra a unos 100 km de altura en lo que se conoce como la línea de Kármán.",
        "image": require("../img/virginGalactic.jpg"),
        "image200": require("../img/virginGalactic_200.jpg"),
        "image400": require("../img/virginGalactic_400.jpg"),
        "image600": require("../img/virginGalactic_600.jpg"),
        "image800": require("../img/virginGalactic_800.jpg"),
        "alt": "Aeronave Virgin Galactic"
    },
    {
        "fileHTML": "spaceStation",
        "title": "Visita la Estación Espacial",
        "description": "Más de 200 personas han visitado la Estación Espacial Internacional hasta la fecha. Sin embargo, solo 7 civiles afortunados (y adinerados) han cumplido este sueño.",
        "image": require("../img/spaceStation.jpg"),
        "image200": require("../img/spaceStation_200.jpg"),
        "image400": require("../img/spaceStation_400.jpg"),
        "image600": require("../img/spaceStation_600.jpg"),
        "image800": require("../img/spaceStation_800.jpg"),
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
