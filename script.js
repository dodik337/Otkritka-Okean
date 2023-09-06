const container = document.querySelector('.container')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const button = document.querySelector('.button')

const slidesCount = right.querySelectorAll('div').length
let currentSlide = 0

left.style.top = `-${(slidesCount - 1)*100}vh`

const changeSlide = function() {
    currentSlide++

    if (currentSlide == slidesCount)
        currentSlide = 0

    const height = container.clientHeight
    left.style.transform = `translateY(${currentSlide * height}px)`
    right.style.transform = `translateY(-${currentSlide * height}px)`
}

button.addEventListener('click', function() {
    changeSlide()
})