/*
Intersection

&를 사용해 2개 이상의 타입을 조합하는 경우를 인터섹션이라 한다.
*/

interface Cat {
  leg: number;
}

interface Bird {
  wing: number;
}

let birdCat: Cat & Bird = { leg: 1, wing: 2 };

let myFunc: (a: number) => number = (a: number) => { return a };

