import { hello } from './01-hello.js'

const prenoms = ['Toto', 'Titi', 'Tata'];

for (const p of prenoms) {
  console.log(hello(p));
}
