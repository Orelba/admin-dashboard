const elBody = document.querySelector('body')
const elNavMenuOpenButton = document.querySelectorAll('.hamburger-icon')
const elNavMenu = document.querySelector('.sidebar')

elNavMenuOpenButton.forEach((button) => {
  button.addEventListener('click', () => {
    elNavMenu.classList.toggle('slidein')
    elBody.classList.toggle('overflow-hidden')
  })
})
