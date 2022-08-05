const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const submit = document.getElementById('submit')

submit.addEventListener('click', (e) => {
  e.preventDefault()
  
})

const openModal = (modal) => {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

const closeModal = (modal) => {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach((modal) => {
    closeModal(modal)
  })
})

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

// window.onscroll = () => {
//   scrollRotate();
// };

// const scrollRotate = () => {
//   let image = document.getElementById("reload");
//   image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
// }
