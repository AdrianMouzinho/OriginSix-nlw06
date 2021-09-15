/* abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll('nav .toogle')

for(const element of toogle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* abre e fecha o menu quando clicar no icone: hamburguer e x */
const links = document.querySelectorAll('nav ul li a')

for(const item of links) {
    item.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/* mudar o header da página quando der scroll */
function changeHeaderScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight
    
    if(this.window.scrollY >= navHeight) {
        /* maior ou igual a altura do header */
        header.classList.add('scroll')
    } else {
        /* menor que a altura do header */
        header.classList.remove('scroll')
    }
}

/* testimonials carrossel slide swipper 
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
}) 

/* ScrollReveal: Mostrar elementos quando ser scroll na página 
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '35px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonial,
    #contact .text, #contact .info
    `, { interval: 100 })
    */

/* Botão voltar para o topo */
function backToTop() {
    const buttonBackToTop = document.querySelector('.topo')
    if (window.scrollY >= 560) {
        buttonBackToTop.classList.add('show')
    }else {
        buttonBackToTop.classList.remove('show')
    }
}

/* When Scroll */

window.addEventListener('scroll', function() {
    changeHeaderScroll()
    backToTop()
})