const menuItens = document.querySelectorAll('.container-navbar a[href^="#')

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href')
    const section = document.querySelector(id).offsetTop;

    window.scroll({
        top: section - 50,
        behavior: "smooth"
    })
}