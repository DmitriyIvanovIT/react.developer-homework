import { isNumber } from './helpers';
import { mathOperators, mathOperatorsPriorities, mathPriorities } from './mathOperators';

export type ParsedLineType = (number | string)[];

const [UNARY] = mathPriorities;

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(' ');

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item) && mathOperatorsPriorities[prevItem] !== UNARY;
    const isValidOperatorPush =
      (isNumber(prevItem) && !isNumber(item) && mathOperators.hasOwnProperty(item)) ||
      (mathOperators.hasOwnProperty(item) && mathOperatorsPriorities[prevItem] === UNARY);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError('Unexpected string');
    }
    return result;
  }, []);
};
