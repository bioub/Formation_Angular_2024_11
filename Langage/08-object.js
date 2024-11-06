// En JS de nombreux objets sont déjà instanciés

// API du language JS
console.log('typeof Math', typeof Math);
console.log('typeof JSON', typeof JSON);

// API de la plateforme (Node, Browser, MongoDB...)
console.log('typeof process', typeof process);

// Il faut voir l'objet JS comme un dictionnaire
// -> système clé/valeur extensible
console.log('typeof Math.sum', typeof Math.sum); // undefined

Math.sum = (a, b) => a + b;
console.log('Math.sum(1, 2)', Math.sum(1, 2)); // 3
delete Math.sum;

console.log('typeof Math.sum', typeof Math.sum); // undefined

// ATTENTION à ne pas étendre des objets que vous n'avez pas créé
// (comme ici avec Math)
// OK dans les tests unitaires

// Pour créer ses propres objets
// il existe 2 systèmes

// Object literal
// Use case :
// - un objet créé ponctuellement (1 instance)
// - créé plusieurs fois sans méthodes
const MyMath = {
  sum(a, b) {
    return a + b;
  }
};

const coords = {
  x: 1,
  y: 2,
};

coords.z = 3;

// Constructor / class
// Use case
// - object créés plusieurs fois avec des méthodes
// - besoin d'un type

// Ancien mot clé
// function User(name) {
//   this.name = name;
// }

// User.getClass = function() {
//   return 'User';
// }

// User.prototype.hello = function() {
//   return 'Hello ' + this.name;
// }

// const romain = new User('romain');
// console.log('typeof User', typeof User); // function
// console.log('typeof romain', typeof romain); // object
// console.log('romain.name', romain.name); // romain
// console.log('romain.hello()', romain.hello()); // romain
// console.log("romain.hasOwnProperty('name')", romain.hasOwnProperty('name')); // true
// console.log("romain.hasOwnProperty('hello')", romain.hasOwnProperty('hello')); // false
// console.log('User.getClass()', User.getClass()); // User

// const toto = new User('toto');




// Nouveau mot clé
class User {
  constructor(name) {
    this.name = name;
  }
  static getClass() {
    return 'User';
  }
  hello() {
    return 'Hello ' + this.name;
  }
}

const romain = new User('romain');
console.log('typeof User', typeof User); // function
console.log('typeof romain', typeof romain); // object
console.log('romain.name', romain.name); // romain
console.log('romain.hello()', romain.hello()); // romain
console.log("romain.hasOwnProperty('name')", romain.hasOwnProperty('name')); // true
console.log("romain.hasOwnProperty('hello')", romain.hasOwnProperty('hello')); // false
console.log('User.getClass()', User.getClass()); // User

const toto = new User('toto');
console.log('toto instanceof User', toto instanceof User); true
console.log('toto instanceof Object', toto instanceof Object); true
console.log('toto instanceof String', toto instanceof String); true

class Admin extends User {
  constructor(name) {
    super(name);
    this.role = 'admin';
  }
  static getClass() {
    return 'User';
  }
  hello() {
    return super.hello() + ' my role is admin';
  }
}
