// Header
/* abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll('nav .toogle')

for (const element of toogle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* abre e fecha o menu quando clicar no icone: hamburguer e x */
const links = document.querySelectorAll('nav ul li a')

for (const item of links) {
  item.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderScroll() {
  if (this.window.scrollY >= navHeight) {
    /* maior ou igual a altura do header */
    header.classList.add('scroll')
  } else {
    /* menor que a altura do header */
    header.classList.remove('scroll')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + window.innerHeight / 2

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// Swipper
/* testimonials carrossel slide swipper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando ser scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '35px',
  duration: 500,
  reset: true
})

scrollReveal.reveal(
  `
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonial,
    #contact .text, #contact .info
`,
  { interval: 100 }
)

// Voltar ao topo
/* Botão voltar para o topo */
const buttonBackToTop = document.querySelector('.topo')

function backToTop() {
  if (window.scrollY >= 560) {
    buttonBackToTop.classList.add('show')
  } else {
    buttonBackToTop.classList.remove('show')
  }
}

/* When Scroll */

window.addEventListener('scroll', function () {
  changeHeaderScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
