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
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(this.window.scrollY >= navHeight) {
        /* maior ou igual a altura do header */
        header.classList.add('scroll')
    } else {
        /* menor que a altura do header */
        header.classList.remove('scroll')
    }
})