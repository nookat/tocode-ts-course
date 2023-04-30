"use strict";
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
function test22(a) {
    if (a > 10) {
        return a;
    }
}
let fc = test22;
fc('str');
