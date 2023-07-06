function getSplitedHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.splice(0, l);
}

const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;
const split2: <TURBO>(data: Array<TURBO>) => Array<TURBO> = getSplitedHalf;

interface ILogLine<T> {
  timeStamp: Date;
  data: T
}

type LoginLineType<T> = {
  timeStamp: Date;
  data: T
}

const logLine: ILogLine<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 2
  }
}

const logLine2: LoginLineType<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 2
  }
}