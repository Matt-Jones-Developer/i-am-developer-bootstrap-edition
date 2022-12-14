// stop navlink animations repeating on hover
const startPage = (() => {
    const html = document.documentElement,
        s = 'start'
    html.classList.add(s)
    window.addEventListener('load', function () {
        setTimeout(() => {
            html.classList.remove(s)
        }, 350)
    })
})()

