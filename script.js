// ===== DATI =====
const articles = [
    { id: 1, name: "Huawei X5", category: "Elettronica", price: "120.12", type: "sell" },
    { id: 2, name: "Fiat 500", category: "Motori", price: "2000.32", type: "search" },
    { id: 3, name: "Mazza da Baseball", category: "Sport", price: "20.15", type: "sell" },
    { id: 4, name: "Bilocale", category: "Immobili", price: "30000.54", type: "search" },
    { id: 5, name: "Felpa usata", category: "Abbigliamento", price: "10.42", type: "sell" },
    { id: 6, name: "Divani due posti", category: "Arredamento", price: "400.64", type: "search" },
    { id: 7, name: "Pala", category: "Giardinaggio", price: "30.45", type: "sell" },
    { id: 8, name: "Master of Pupo", category: "Musica", price: "15.64", type: "sell" },
    { id: 9, name: "TV Samsung", category: "Elettronica", price: "230.42", type: "sell" },
    { id: 10, name: "Ford Puma", category: "Motori", price: "25000.02", type: "sell" },
    { id: 11, name: "Pallone da calcio", category: "Sport", price: "30.12", type: "search" },
    { id: 12, name: "Trilocale", category: "Immobili", price: "55000.54", type: "sell" },
    { id: 13, name: "Sciarpa scolorita", category: "Abbigliamento", price: "5.23", type: "sell" },
    { id: 14, name: "Lampada", category: "Arredamento", price: "70.65", type: "sell" },
    { id: 15, name: "Concime", category: "Giardinaggio", price: "2.45", type: "search" },
    { id: 16, name: "Basso nuovo", category: "Musica", price: "300.62", type: "sell" },
    { id: 17, name: "Cuffie Sony", category: "Elettronica", price: "120.65", type: "sell" },
    { id: 18, name: "Ducati Monster", category: "Motori", price: "12000.13", type: "sell" },
    { id: 19, name: "Pattini", category: "Sport", price: "90.64", type: "search" },
    { id: 21, name: "Guanti invernali", category: "Abbigliamento", price: "22.04", type: "sell" },
    { id: 22, name: "Scrivania in vetro", category: "Arredamento", price: "600.63", type: "search" },
    { id: 23, name: "Secchio", category: "Giardinaggio", price: "30.43", type: "search" },
    { id: 24, name: "Compilation Pupo", category: "Musica", price: "9.93", type: "search" },
    { id: 25, name: "Auricolari Sennheiser", category: "Elettronica", price: "120.93", type: "sell" },
    { id: 26, name: "Fiat 300", category: "Motori", price: "2560.42", type: "sell" },
    { id: 27, name: "Set mazze da golf", category: "Sport", price: "4320.43", type: "search" },
    { id: 28, name: "Posto auto", category: "Immobili", price: "2200.63", type: "search" },
    { id: 29, name: "Zaino Decathlon", category: "Abbigliamento", price: "55.55", type: "sell" },
    { id: 30, name: "Comodino", category: "Arredamento", price: "210.12", type: "sell" },
    { id: 31, name: "Rastrello", category: "Giardinaggio", price: "5.62", type: "sell" },
    { id: 32, name: "Compilation Nino D'Angelo", category: "Musica", price: "1.91", type: "sell" },
    { id: 33, name: "IPhone X", category: "Elettronica", price: "1300.41", type: "search" },
    { id: 34, name: "Nissan Juke", category: "Motori", price: "25420.40", type: "sell" },
    { id: 35, name: "Guanti da palestra", category: "Sport", price: "11.54", type: "search" },
    { id: 37, name: "Scarpe Nike", category: "Abbigliamento", price: "240.33", type: "sell" },
    { id: 38, name: "Poltrona", category: "Arredamento", price: "420.66", type: "search" },
    { id: 39, name: "Semi", category: "Giardinaggio", price: "4.43", type: "sell" },
    { id: 40, name: "Biglietto Gods Of Metal", category: "Musica", price: "150.65", type: "search" },
    { id: 41, name: "Macbook Pro", category: "Elettronica", price: "2340.37", type: "search" },
    { id: 42, name: "Dacia Duster", category: "Motori", price: "13350.73", type: "sell" },
    { id: 43, name: "Canoa", category: "Sport", price: "520.03", type: "search" },
    { id: 44, name: "Cantina", category: "Immobili", price: "20000.12", type: "sell" },
    { id: 45, name: "Jeans", category: "Abbigliamento", price: "55.54", type: "sell" },
    { id: 46, name: "Lampadario", category: "Arredamento", price: "280.54", type: "sell" },
    { id: 47, name: "Trattore", category: "Giardinaggio", price: "12000.09", type: "sell" },
    { id: 48, name: "Plettro", category: "Musica", price: "0.99", type: "sell" },
    { id: 49, name: "Modem", category: "Mimmo", price: "2.99", type: "sell" }
];

// ===== ELEMENTI DOM =====
const container = document.getElementById("annunciContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const typeFilter = document.getElementById("typeFilter");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");

// ===== POPOLA LE CATEGORIE NEL SELECT =====
function popolaCategorie() {
    const categorie = [];

    for (let i = 0; i < articles.length; i++) {
        const cat = articles[i].category;
        if (categorie.indexOf(cat) === -1) {
            categorie.push(cat);
        }
    }

    for (let i = 0; i < categorie.length; i++) {
        const option = document.createElement("option");
        option.value = categorie[i];
        option.innerText = categorie[i];
        categoryFilter.appendChild(option);
    }
}

// ===== CREA UNA SINGOLA CARD =====
function creaCard(annuncio) {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4";

    const tipoLabel = annuncio.type === "sell" ? "In vendita" : "Cerco";
    const badgeClass = annuncio.type === "sell" ? "badge-sell" : "badge-search";

    col.innerHTML = `
        <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <span class="badge bg-secondary">${annuncio.category}</span>
                    <span class="badge ${badgeClass}">${tipoLabel}</span>
                </div>
                <h5 class="card-title">${annuncio.name}</h5>
                <p class="price mt-auto mb-0">€ ${annuncio.price}</p>
            </div>
        </div>
    `;

    return col;
}

// ===== MOSTRA GLI ANNUNCI FILTRATI =====
function mostraAnnunci() {
    const testoRicerca = searchInput.value.toLowerCase();
    const categoriaScelta = categoryFilter.value;
    const tipoScelto = typeFilter.value;

    // Svuoto il contenitore
    container.innerHTML = "";

    let contatore = 0;

    for (let i = 0; i < articles.length; i++) {
        const annuncio = articles[i];

        // Filtri
        const matchNome = annuncio.name.toLowerCase().includes(testoRicerca);
        const matchCategoria = categoriaScelta === "all" || annuncio.category === categoriaScelta;
        const matchTipo = tipoScelto === "all" || annuncio.type === tipoScelto;

        if (matchNome && matchCategoria && matchTipo) {
            const card = creaCard(annuncio);
            container.appendChild(card);
            contatore++;
        }
    }

    // Aggiorno contatore e messaggio
    resultCount.innerText = contatore + " annunci trovati";

    if (contatore === 0) {
        noResults.classList.remove("d-none");
    } else {
        noResults.classList.add("d-none");
    }
}

// ===== EVENTI =====
searchInput.addEventListener("input", mostraAnnunci);
categoryFilter.addEventListener("change", mostraAnnunci);
typeFilter.addEventListener("change", mostraAnnunci);

// ===== AVVIO =====
popolaCategorie();
mostraAnnunci();