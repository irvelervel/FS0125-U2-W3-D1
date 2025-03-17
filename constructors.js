// UN MODO PIÙ ORDINATO E COERENTE PER CREARE OGGETTI IN SERIE
// La "funzione costruttore" permette la facile creazione in serie di oggetti
// tutti dotati dello stesso elenco di proprietà e metodi

const person1 = {
  firstName: 'Mario',
  lastName: 'Rossi',
  address: 'Corso Italia 1',
  email: 'mariorossi@gmail.com',
  showCompleteName: function () {
    console.log('THIS VALE', this)
    return 'Ciao, io mi chiamo ' + this.firstName + ' ' + this.lastName
  },
}

// se utilizzate "this" dentro il metodo di un oggetto, "this" diventa un riferimento
// all'oggetto stesso

// !! WARNING !!
// le funzioni freccia NON POSSIEDONO una normale associazione di "this"
// se nell'esempio in alto cambiate la forma di "showCompleteName" e la fate diventare
// una funzione freccia, il significato di "this" cambierà! Da riferimento all'oggetto
// "person1", passa ad essere un riferimento all'oggettone "Window" (la finestra del
// browser). Questo avviene perchè le funzioni freccia NON possiedono un proprio "this"
// ma ereditano un riferimento esterno

console.log(person1.showCompleteName())

// se mi trovassi a dover "generalizzare" la struttura dell'oggetto "person1" al fine
// di riutilizzarlo per creare altre persone, può valere la pena crearci uno "stampino"
// creiamo una funzione costruttore che genererà in serie oggetti del tipo Person

// le funzioni costruttore in JS seguono la nomenclatura PascalCase
const Person = function () {
  // questa è una FUNZIONE COSTRUTTORE
  // è uno STAMPINO per creare OGGETTI

  // in questo caso "this" è l'oggetto che verrà ritornato dalla funzione
  this.firstName = ''
  this.lastName = ''
  this.address = ''
  this.email = ''
  this.showCompleteName = function () {
    return 'Ciao, io mi chiamo ' + this.firstName + ' ' + this.lastName
  }
}

// stampino pronto! come creo un oggetto?
const mario = new Person() // creato un oggetto
const luigi = new Person() // creato un oggetto

// funziona, ma crea "gusci vuoti"... dopo sono costretto ad assegnare un valore
// a tutte le proprietà che ho inizializzato a stringa vuota
mario.firstName = 'Mario'
mario.address = 'Mushroom Kingdom 1'
mario.email = 'mario@nintendo.com'

luigi.firstName = 'Luigi'
console.log('MARIO', mario)
console.log('LUIGI', luigi)

// possiamo migliorare il nostro costruttore e cercare di inizializzare i nostri
// oggetti in modo più completo? sì!

const ImprovedPerson = function (_firstName, _lastName, _email, _address) {
  this.firstName = _firstName
  this.lastName = _lastName
  this.email = _email
  this.address = _address
  this.showCompleteName = function () {
    return 'Ciao, io mi chiamo ' + this.firstName + ' ' + this.lastName
  }
}

const yoshi = new ImprovedPerson(
  'Yoshi',
  'Yoshi',
  'yoshi@nintendo.com',
  'Yoshi street 100'
)
const bowser = new ImprovedPerson(
  'Bowser',
  'Koopa',
  'bowser@nintendo.com',
  'World 8'
)
console.log('YOSHI', yoshi)
console.log('BOWSER', bowser)

console.log(yoshi.showCompleteName())
console.log(bowser.showCompleteName())
console.log(yoshi.firstName.charAt(0))
