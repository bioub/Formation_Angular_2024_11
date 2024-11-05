setTimeout(function() {
  console.log('A');
}, 500);
setTimeout(function() {
  console.log('B');
}, 0);
setTimeout(function() {
  console.log('C');
}, 1000);
setTimeout(function() {
  console.log('D');
}, 500);
console.log('E');

// A votre avis dans quel ordre s'affichent les lettres ?
//

// pile d'appel
// ^
// |
// |                      [lg]                 [lg] [lg]                 [lg]
// |[st][st][st][st][lg]⟳ [cbB]⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳ [cbA][cbB]⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳ [cbC]
// +---------------------------------------------------------------------------> temps
//                  E     B

// file d'attente (0ms): cbB
// file d'attente (3ms):
// file d'attente (500ms): cbA - cbD
// file d'attente (501ms): cbD
// file d'attente (502ms):
// file d'attente (1000ms): cbC
// file d'attente (1001ms):
