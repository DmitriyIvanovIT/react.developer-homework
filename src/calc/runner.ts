import { parser } from './parser';

import { firstPrioritiesCalc, secondPrioritiesCalc, thirdPrioritiesCalc, unaryPrioritiesCalc } from './engine';

export const runner = (line: string): number => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError('Unexpected string');
  }

  const unaryPrioritiesRes = unaryPrioritiesCalc(stack);

  if (unaryPrioritiesRes.length === 1) {
    return Number(unaryPrioritiesRes[0]);
  }

  const firstPrioritiesRes = firstPrioritiesCalc(unaryPrioritiesRes);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  const secondPrioritiesRes = secondPrioritiesCalc(firstPrioritiesRes);

  return thirdPrioritiesCalc(secondPrioritiesRes);
};
