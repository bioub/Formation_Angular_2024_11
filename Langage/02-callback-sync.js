function hello(name) {
  console.log("Hello " + name);
}

const prenoms = ['Toto', 'Titi', 'Tata'];

prenoms.forEach(hello);
// voir aussi filter, map, reduce, find, findIndex...

// function forEach(callback) {
//   for (var i=0; i < array.length; i++) {
//     callback(array[i])
//   }
// }


// pile d'appel
// ^
// |
// |[hello][hello][hello]
// |[forEach            ]
// +----------------------------------> temps
