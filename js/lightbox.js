const lightbox = document.createElement('div')
lightbox.id = 'lightbox'

document.body.appendChild(lightbox)
const images = document.querySelectorAll('img')

images.forEach(img => {
    img.addEventListener('click', e => {
        lightbox.classList.add('active')
        const image = document.createElement('img')
        image.src = img.src

        while(lightbox.firstChild) lightbox.removeChild(lightbox.firstChild)
        lightbox.appendChild(image)
    })
})

lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})
