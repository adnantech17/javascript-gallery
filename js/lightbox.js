const lightbox = document.createElement('div')
lightbox.id = 'lightbox'

document.body.appendChild(lightbox)
const images = document.querySelectorAll('.gallery__image')
console.log(images)

images.forEach(img => {
    img.addEventListener('click', e => {
        lightbox.classList.add('active')
        const image = document.createElement('img')
        image.id = 'image-content'
        image.src = img.src
        const next = document.createElement('img')
        const prev = document.createElement('img')
        next.id = 'image-next'
        prev.id = 'image-prev'
        next.src = '../images/next.png'
        prev.src = '../images/prev.png'

        while(lightbox.firstChild) lightbox.removeChild(lightbox.firstChild)
        lightbox.appendChild(prev)
        lightbox.appendChild(image)
        lightbox.appendChild(next)

        next.addEventListener('click', e => {
            var index = 0;
            for(var i = 0; i < images.length; i++) {
                if(images[i].src == image.src) {
                    index = i;
                    break;
                }
            }
            index = (index + 1) % images.length
            image.src = images[index].src
        })

        prev.addEventListener('click', e => {
            var index = 0;
            for(var i = 0; i < images.length; i++) {
                if(images[i].src == image.src) {
                    index = i;
                    break;
                }
            }
            index = (index - 1) % images.length
            if(index < 0) index += images.length
            image.src = images[index].src
        })
    })
})

lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})
