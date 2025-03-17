// con ES6 viene introdotta la keyword "class" per unificare la sintassi di JS
// con quella di altri linguaggi fortemente tipizzati basati sulle classi (Java, C#)
// questo al fine di facilitare la transizione di molti sviluppatori abituati ad
// altri ecosistemi al mondo dello sviluppo WEB
// però non crediate che questo abbia in qualche modo modificato la natura prototipale
// di JS!

// la classi in JS sono un modo ALTERNATIVO di utilizzare le funzioni costruttore!

// creiamo un costruttore per un oggetto di tipo NamedPerson
class NamedPerson {
  constructor(_firstName, _lastName) {
    // il metodo della classe chiamato "constructor" è dove riceverete i parametri
    // tutte le proprietà il cui valore viene determinato da un parametro si mettono
    // nel constructor
    this.firstName = _firstName
    this.lastName = _lastName
  }

  // voglio che ogni NamedPerson abbia anche una proprietà "numberOfLegs" con
  // un valore FISSO pari a 2
  // poichè il valore di questa proprietà è FISSO e NON dipenderà da un parametro
  // nella creazione dell'oggetto, NON inseriamo questa proprietà nel constructor

  // lo mettiamo sempre nella classe, ma FUORI dal constructor
  // se una proprietà/metodo viene dichiarata FUORI dal constructor, non potrà accedere
  // ai parametri, ma per comodità potrà venire dichiarata SENZA il "this."
  numberOfLegs = 2
  showCompleteName = function () {
    return 'Ciao, io mi chiamo ' + this.firstName + ' ' + this.lastName
  }
}

const stefano = new NamedPerson('Stefano', 'Casasola')
console.log('stefano', stefano)
// il risultato è identico!
console.log(stefano.showCompleteName())

// una CLASSE è come uno stampino, una fabbrica, un progetto per creare oggetti
// un'ISTANZA è un oggetto fuoruscito da una classe
const gianMarco = new NamedPerson('Gianmarco', 'Burattini')
console.log('gianMarco', gianMarco)
console.log(gianMarco.showCompleteName())
