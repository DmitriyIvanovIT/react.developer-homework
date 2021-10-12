export type ScalarOperationType = (first: number, second?: number) => number;

export const mul: ScalarOperationType = (first: number, second: number): number => first * second;

export const div: ScalarOperationType = (first: number, second: number): number => first / second;

export const add: ScalarOperationType = (first: number, second: number): number => first + second;

export const minus: ScalarOperationType = (first: number, second: number): number => first - second;

export const square = (num: number): number => num ** 2;

export const power: ScalarOperationType = (first: number, second: number): number => first ** second;

export const factorial = (num: number): number => {
  if (num === 0 || num === 1) {
    return 1;
  }

  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
};

export const mathOperators: { [key: string]: ScalarOperationType } = {
  '*': mul,
  '/': div,
  '+': add,
  '-': minus,
  '**': square,
  '^': power,
  '!': factorial,
};

export const mathPriorities: number[] = [1, 2, 3, 4];

const [UNARY, FIRST, SECOND, THIRD] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  '*': SECOND,
  '/': SECOND,
  '+': THIRD,
  '-': THIRD,
  '**': UNARY,
  '^': FIRST,
  '!': UNARY,
};
