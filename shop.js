fetch('./shop.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let radioWrapper = document.querySelector('#radioWrapper');
    let cardWrapper = document.querySelector('#cardWrapper');
    let searchInput = document.querySelector('#searchInput');
    let minPrice = document.querySelector('#minPrice');
    let maxPrice = document.querySelector('#maxPrice');

    function setCategoryRadios() {
      let categories = data.map((ad) => ad.category);
      let uniqueCategories = Array.from(new Set(categories));
      uniqueCategories.unshift('All');

      uniqueCategories.forEach((category) => {
        let div = document.createElement('div');
        div.classList.add('form-check');

        div.innerHTML = `
          <input class="form-check-input" type="radio" name="categories" id="${category}">
          <label class="form-check-label" for="${category}">
            ${category}
          </label>
        `;

        radioWrapper.appendChild(div);
      });

      let allRadio = document.querySelector('#All');
      if (allRadio) {
        allRadio.checked = true;
      }

      let radios = document.querySelectorAll('input[name="categories"]');
      radios.forEach((radio) => {
        radio.addEventListener('click', filterCards);
      });
    }

    function showCards(array) {
      cardWrapper.innerHTML = '';

      array.forEach((ad) => {
        let div = document.createElement('div');
        div.classList.add('card-custom');

        div.innerHTML = `
          <p class="h3" title="${ad.name}">${ad.name}</p>
          <p class="lead">${ad.category}</p>
          <p>${ad.price}€</p>
        `;

        cardWrapper.appendChild(div);
      });
    }

    function filterCards() {
      let radios = document.querySelectorAll('input[name="categories"]');
      let arrayFromNodeList = Array.from(radios);
      let button = arrayFromNodeList.find((radio) => radio.checked);

      let searchValue = searchInput.value.toLowerCase();
      let min = Number(minPrice.value);
      let max = Number(maxPrice.value);

      // se i campi prezzo sono vuoti, non limitare
      if (minPrice.value === '') min = 0;
      if (maxPrice.value === '') max = Infinity;

      let filtered = data.filter((ad) => {
        let price = Number(ad.price);

        let matchCategory = button.id == 'All' || ad.category == button.id;
        let matchName = ad.name.toLowerCase().includes(searchValue);
        let matchPrice = price >= min && price <= max;

        return matchCategory && matchName && matchPrice;
      });

      showCards(filtered);
    }

    setCategoryRadios();
    showCards(data);

    searchInput.addEventListener('input', filterCards);
    minPrice.addEventListener('input', filterCards);
    maxPrice.addEventListener('input', filterCards);
  });