// массив чисел
const numArr: Array<number> = [1, 3, 22, 45];

async function testPromise() {
  const a = await new Promise<number>((resolve, reject) => {
    resolve(3);
  })
}

const check: Record<string, boolean> = {
  drive: true,
  kpp: false
}