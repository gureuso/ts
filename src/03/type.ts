interface Cat {
  leg: number;
}

interface Bird {
  wing: number;
}

let birdCat: Cat & Bird = { leg: 1, wing: 2 };

let myFunc: (a: number) => number = (a: number) => { return a };

