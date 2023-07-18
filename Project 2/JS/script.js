let menuBar = document.getElementById('Menu')
let sidebar = document.querySelector('nav.Dropdown')

menuBar.addEventListener('click', (e) => {
    sidebar.classList.toggle('showOpen')
    menuBar.classList.toggle('fa-xmark')
    menuBar.classList.toggle('fa-bars')
    if (sidebar.classList.contains('showOpen')) {
        document.body.classList.add('overlay')
    }
    if (!sidebar.classList.contains('showOpen')) {
        document.body.classList.remove('overlay')
    }
})

if (!sidebar.classList.contains('showOpen')) {
    document.body.classList.remove('overlay')
}


let searchIcon = document.querySelector('header .container nav ul li form .search-section i')
let dropdown = document.querySelectorAll('header .container nav ul li a')
if (window.innerWidth > 1100) {

    searchIcon.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('fa-xmark')
        e.currentTarget.classList.toggle('fa-search')

        e.currentTarget.parentElement.classList.toggle('show')

        if (e.currentTarget.parentElement.classList.contains('show'))
            dropdown.forEach((v) => {
                v.style.opacity = '0'
            })
        if (!e.currentTarget.parentElement.classList.contains('show'))
            dropdown.forEach((v) => {
                v.style.opacity = '1'
            })
    })
}