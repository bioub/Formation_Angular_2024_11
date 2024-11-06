import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hello',
  standalone: true,
})
export class HelloPipe implements PipeTransform {
  // transform doit être pure
  // - prédictive (appelée avec un param donné elle toujours le même)
  // ex: getRandomInt(0, 100) n'est pas prédictive
  // ex: hello('Romain') est prédictive
  // - doit pas avoir de side-effect, pas d'appel à des APIs ou des variables
  // externes (ex: une requete HTTP, un log)
  // - ne modifie ses paramètres d'entrées

  // transform(value: string): string {
  //   return `Hello ${value}`;
  // }

  transform(value: string, suffix = '...', otherSuffix = ''): string {
    return 'Hello ' + value + suffix + otherSuffix;
  }
}
