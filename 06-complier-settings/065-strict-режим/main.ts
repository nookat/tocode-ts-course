/*
  // если включен noImplicitAny, то параметр будет подчеркнут, требуя типизации явной
  function test(a) {
    return 2;
  }
*/



/*
// strictNullChecks не пропустит, функция возвращает не только number, но и undefined

function test2(a: number): number {
  if (a > 10) {
    return a;
  }
}
*/

function test22(a: number): number {
  if (a > 10) {
    return a;
  }
}

type strOrNumFunc = (a: string | number) => number;
let fc: strOrNumFunc = test22;
fc('str');