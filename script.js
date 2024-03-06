const nav_btn = document.getElementsByClassName("navigation__btn")[0]
const modal_btn = document.getElementsByClassName("modal__btn")[0]
const modal = document.getElementsByClassName("modal")[0]
const modal__links = document.querySelectorAll('.modal__link')
let modalOpened = false

function closeModal () {
    modalOpened = false
    document.querySelector('html').style.overflowY = 'scroll'
    modal.style.transform = 'translateX(100vw)'
    setTimeout(() => {
        modal.style.display = 'none'
    }, 300);
}

function openModal() {
    modalOpened = true
    document.querySelector('html').style.overflowY = 'hidden'
    modal.style.display = 'block'
    setTimeout(() => {
        modal.style.transform = 'translateX(-100vw)'
    }, 1);
}

modal__links.forEach((link) => {
    link.addEventListener('click', () => {closeModal()})
})

nav_btn.addEventListener('click', () => {openModal()})

modal_btn.addEventListener('click', () => {closeModal()})

window.addEventListener("resize", () => {
    if (window.innerWidth >= 700) {
        modal.style.display = 'none'
        closeModal()
    }
});
