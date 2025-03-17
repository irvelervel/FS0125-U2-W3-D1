// La sintassi con "class" permette ulteriori possiblità nella definizione
// delle nostre strutture OOP

class HumanBeing {
  constructor(_name, _surname, _age, _hairColor, _eyeColor) {
    this.name = _name
    this.surname = _surname
    this.age = _age
    this.hairColor = _hairColor
    this.eyeColor = _eyeColor
  }
  canFly = false
  greet = function () {
    return 'Ciao! Io sono ' + this.name
  }
}

const gianMaria = new HumanBeing('Gianmaria', 'Scandicci', 21, 'brown', 'azure')
console.log('GIANMARIA', gianMaria)

// definiamo ora una classe Developer
// vado a definire questa classe Developer come SOTTOCLASSE di HumanBeing
// questo fornirà a Developer un punto di partenza (avrà già di base tutte le proprietà
// di HumanBeing)
class Developer extends HumanBeing {
  constructor(
    _name,
    _surname,
    _age,
    _hairColor,
    _eyeColor,
    _skills,
    _yearsOfExp
  ) {
    // qui nel costruttore non andrò a ripetere l'assegnazione dei parametri
    // INVOCO IL COSTRUTTORE DI HUMANBEING CON I PRIMI 5 PARAMETRI
    // Developer abbiamo detto che è una SOTTOCLASSE di HumanBeing...
    // ...questo rende HumanBeing la SUPERCLASSE di Developer...
    super(_name, _surname, _age, _hairColor, _eyeColor)
    // così ho creato le proprietà this.name, this.surname, this.age, this.canFly etc.
    this.skills = _skills
    this.yearsOfExp = _yearsOfExp
  }
  canFly = true // ovviamente i developer volano
  hairColor = null // lo sviluppatore perde istantaneamente i capelli
}

const gigi = new Developer(
  'Gigi',
  'Carbonio',
  37,
  'black',
  'brown',
  ['HTML', 'JS'],
  15
)

console.log('GIGI', gigi)
