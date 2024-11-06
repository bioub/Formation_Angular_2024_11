import { hello } from './hello.js'

const prenoms = ['Toto', 'Titi', 'Tata', 'Tutu'];

for (const p of prenoms) {
  console.log(hello(p));
}
