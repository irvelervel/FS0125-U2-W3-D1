// recap oggetti

// in JS gli oggetti vengono spesso definiti con la cosiddetta "notazione letterale"
const house = {
  // qui dentro ci vanno coppie chiave:valore
  wallColor: 'orange',
  numberOfFloors: 2,
  'garden-size': '25mq',
  families: ['Rossi', 'Bianchi'],
  speak: function () {
    return 'Ciao sono Casa'
  },
}

// accedere alle proprietà di un oggetto:
// a) DOT NOTATION
house.wallColor // 'orange'
console.log(house.speak()) // console.log('Ciao sono Casa')

// b) SQUARE BRACKETS NOTATION
// utile per chiavi con nomi strani (tipo "garden-size") o per accedere a proprietà
// descritte dal valore di una variabile
house['numberOfFloors'] // 2
house['garden-size']

const property = 'families'
house.property // undefined
house[property] // ['Rossi', 'Bianchi']

// PROTOTIPI
house.__proto__ // oggettone "Object"

// LIMITAZIONI DELLA NOTAZIONE LETTERALE PER LA STESURA DI OGGETTI
const dog1 = {
  name: 'Fufi',
  breed: 'French Bulldog',
}

const dog2 = {
  name: 'Fido',
  breed: 'German Shepard',
}

// ...

const dog35 = {
  names: 'Pluto', // ERRORE
  breed: 'Golden Retriever',
}

const dogArray = [dog1, dog2, dog35]

dogArray.forEach((dog) => {
  console.log(dog.name)
})

// "Fufi"
// "Fido"
// undefined :(

// La lezione di oggi verterà sulla creazione dei nostri prototipi ("stampini")
// al fine di ottimizzare la creazione IN SERIE di numeri oggetti dello stesso tipo,
// cosa fondamentale nell'applicazione della OOP
// Oggetto creati con uno "stampino" non avranno mai le classiche problematiche
// derivate dalla ripetizione della creazione di oggetti tramite la notazione letterale

// passiamo a constructors.js
