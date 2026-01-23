'use strict'
let body = document.querySelector('body')

let btnNavigation = document.querySelector('.btn_navigation')
let navigation = document.querySelector('.navigation')
let navbar = document.querySelector('.navbar')

let btnContact = document.querySelector('.contact_btn')
let modalContact = document.querySelector('.contact_modal')
let btnCloseModal = document.querySelector('.modal_close_btn')
let modalOverlay = document.querySelector('.overlay')

let inputs = document.querySelectorAll('input, textarea')
let btnSubmit = document.querySelector('.submit_btn')

// zobrazení navigačního menu
function toggleMenu() {
  navigation.classList.toggle('is_active')
  btnNavigation.classList.toggle('is_active')
}

btnNavigation.addEventListener('click', toggleMenu)
navigation.addEventListener('click', toggleMenu)

//Zobrazení kontakního formuláře
function toggleModal() {
  btnContact.classList.toggle('is_active')
  modalContact.classList.toggle('is_active')
  modalOverlay.classList.toggle('is_active')
  body.classList.toggle('stop_scroll')
}

btnContact.addEventListener('click', toggleModal)
btnCloseModal.addEventListener('click', toggleModal)

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') toggleModal()
})

//Aktivace tlačítka v kontaktním formuláři
function checkFormValidity() {
  let allFilled = Array.from(inputs).every((input) => input.value.trim() !== '')
  if (allFilled) {
    btnSubmit.classList.remove('disabled')
    btnSubmit.removeAttribute('disabled')
  } else {
    btnSubmit.classList.add('disabled')
    btnSubmit.setAttribute('diabled', '')
  }
}

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    checkFormValidity()
  })
})

//odeslání formuláře
document.querySelector('.contact_form').addEventListener('submit', async function (e) {
  e.preventDefault()

  let formData = new FormData(this)

  try {
    let response = await fetch('php/contact.php', {
      method: 'POST',
      body: formData,
    })
    if (response.ok) {
      window.alert('Formulář byl úspěšně odeslán')
      this.reset()
      location.reload()
    } else {
      throw new Error('Server vrátil chybu')
    }
  } catch (error) {
    window.alert('Nastala chyba při odesílání formuláře')
    console.error('Podrobnosti chyby:', error)
  }
})
