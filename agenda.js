// raccogliamo i dati dal form e confezioniamoli dentro un oggetto creato a partire
// da una classe

// cominciamo raccogliendo dal form i riferimenti ai singoli <input />
const firstNameInput = document.getElementById('firstName') // <input />
const lastNameInput = document.getElementById('lastName') // <input />
const phoneInput = document.getElementById('phone') // <input />

// creo una CLASSE per generare un oggetto in maniera precisa e riutilizzabile
class PhoneUser {
  constructor(_firstName, _lastName, _phone) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.phone = _phone
  }
  prefix = '+39'
  favourite = false // contatto preferito
}

// ora seleziono il form e ne attribuisco un comportamento al submit
// (gestisco cosa fare alla pressione del tasto "Salva")
const form = document.getElementById('user-form')

form.addEventListener('submit', function (e) {
  // logica sull'invio del form
  // per PRIMA COSA neutralizzare il comportamento di default
  e.preventDefault()
  // ora la pagina non si riavvierà automaticamente e possiamo raccogliere i dati
  console.log('INVIO DEL FORM')
  // raccolgo i dati dal form e li utilizzo per creare un oggetto di tipo PhoneUser
  // firstNameInput.value <- valore del primo campo
  // lastNameInput.value <- valore del secondo campo
  // phoneInput.value <- valore del terzo campo
  const user = new PhoneUser(
    firstNameInput.value,
    lastNameInput.value,
    phoneInput.value
  )
  console.log('CONTATTO SALVATO', user)
  form.reset()
})
