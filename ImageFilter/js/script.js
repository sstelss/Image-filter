//получаем доступ к элементам через id
const grayscale = document.querySelector('#grayscale')
const contrast = document.querySelector('#contrast')
const brightness = document.querySelector('#brightness')
const sepia = document.querySelector('#sepia')
const saturate = document.querySelector('#saturate')
const image = document.querySelector('#image')
const reset = document.querySelector('#reset')
const imgUrl = document.querySelector('#img-url')

//объект содержащий значения по умолчанию
const defaults = {
    grayscale: 0,
    contrast: 100,
    brightness: 100,
    sepia: 0,
    saturate: 100,
}

//подключаем отслеживание событий к каждому слайдеру
grayscale.addEventListener('input', updateFilterValue)
contrast.addEventListener('input', updateFilterValue)
brightness.addEventListener('input', updateFilterValue)
sepia.addEventListener('input', updateFilterValue)
saturate.addEventListener('input', updateFilterValue)

reset.addEventListener('click', resetFilterValue)

imgUrl.addEventListener('change', changeImageUrl)

//функция применения изменения значения слайдера
function updateFilterValue(){

    reset.disabled = false
    image.style.filter = `
        grayscale(${grayscale.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        saturate(${saturate.value}%)
    `
}

//функция сброса значений и перевода кнопки в неактивное состояние
function resetFilterValue() {

    grayscale.value = defaults.grayscale
    contrast.value = defaults.contrast
    brightness.value = defaults.brightness
    sepia.value = defaults.sepia
    saturate.value = defaults.saturate
    updateFilterValue()
    reset.disabled = true
}

function changeImageUrl() {

    image.src = imgUrl.value
}