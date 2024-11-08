import { delay, filter, interval, map, take, tap } from "rxjs";

// Un opérateur rxjs
// transforme un observable en entrée
// en un autre observable en sortie
// pour l'appliquer on utilise la méthode pipe

interval(1000)
  .pipe(
    filter((val) => val % 2 === 1),
    map((val) => val * 2),
    delay(500),
    tap((v) => console.log('tap', v)),
    take(3),
  )
  .subscribe((val) => {
    console.log('subscribe', val);
  });

// Marble Graph
// un tiret : 250ms
// () : next
// interval(1000)
// ----(0)----(1)----(2)----(3)----(4)----(5)----...
// filter((val) => val % 2 === 1)
// ----   ----(1)----   ----(3)----   ----(5)----...
// map((val) => val * 2)
// ----   ----(2)----   ----(6)----   ----(10)----...
// delay(500),
// ------   ----(2)----   ----(6)----   ----(10)----...
// tap((v) => console.log(v))
// ------   ----(2)----   ----(6)----   ----(10)----...
// take(3)
// ------   ----(2)----   ----(6)----   ----(10)|
