// Navbar scroll
let navbarColor = document.querySelector('#navbarColor');
let linkColor = document.querySelectorAll('.linkColor');
let logo_navbar = document.querySelector('#logo_navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbarColor.style.backgroundColor = 'var(--dark-custom)';
    linkColor.forEach((navLink) => {
      navLink.style.color = 'var(--white-custom)';
    });
    if (logo_navbar) {
      logo_navbar.src = './media/logo-g.jpg';
    }
  } else {
    navbarColor.style.backgroundColor = 'transparent';
    linkColor.forEach((navLink) => {
      navLink.style.color = 'var(--dark-custom)';
    });
    if (logo_navbar) {
      logo_navbar.src = './media/logo-g.jpg';
    }
  }
});

// Incremental numbers
let numberOne = document.querySelector('#numberOne');
let numberTwo = document.querySelector('#numberTwo');
let numberThree = document.querySelector('#numberThree');

function createInterval(finalN, element) {
  let counter = 0;
  let interval = setInterval(() => {
    if (counter < finalN) {
      counter++;
      element.innerHTML = counter;
    } else {
      clearInterval(interval);
    }
  }, 10);
}

let confirm = false;

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && confirm == false) {
      createInterval(250, numberOne);
      createInterval(180, numberTwo);
      createInterval(300, numberThree);
      confirm = true;

      setTimeout(() => {
        confirm = false;
      }, 5000);
    }
  });
});

if (numberOne) {
  observer.observe(numberOne);
}

// Reviews carousel
let reviews = [
  { name: 'Luca', review: 'Ho venduto il mio telefono in un giorno!' },
  { name: 'Anna', review: 'Tantissimi annunci, molto utile.' },
  { name: 'Marco', review: 'Facile da usare e veloce.' }
];

let carouselInner = document.querySelector('.carousel-inner');

if (carouselInner) {
  reviews.forEach((review, index) => {
    let div = document.createElement('div');
    div.classList.add('carousel-item');
    if (index === 0) {
      div.classList.add('active');
    }

    div.innerHTML = `
      <div class="reviewCard">
        <p class="lead fw-bold">${review.name}</p>
        <p class="p-3">${review.review}</p>
      </div>
    `;

    carouselInner.appendChild(div);
  });
}