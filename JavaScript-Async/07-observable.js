import { Observable } from "rxjs";

function interval(delay) {
  return new Observable((subscriber) => {
    setInterval(() => {
      subscriber.next();
    }, delay);
  });
}

interval(1000).subscribe({
  next: () => {
    console.log("interval 1s");
  },
  error: (err) => {

  },
  complete: () => {

  }
});
