import { ParsedLineType } from './parser';
import { isNumber } from './helpers';
import { mathOperators, mathPriorities, mathOperatorsPriorities } from './mathOperators';

const [UNARY, FIRST, SECOND, THIRD] = mathPriorities;

export const unaryPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 1];

    if (!isNumber(String(nextItem)) && mathOperatorsPriorities[nextItem] === UNARY) {
      if (!mathOperators[nextItem]) {
        throw new TypeError('Unexpected stack!');
      }
      result = [...result.slice(0, -1), mathOperators[nextItem](Number(prevItem))];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      if (!mathOperators[item]) {
        throw new TypeError('Unexpected stack!');
      }
      result = [...result.slice(0, -2), mathOperators[item](Number(prevItem), Number(nextItem))];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (mathOperatorsPriorities[item] === FIRST) {
      throw new TypeError('Unexpected stack!');
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      if (!mathOperators[item]) {
        throw new TypeError('Unexpected stack!');
      }
      result = [...result.slice(0, -2), mathOperators[item](Number(prevItem), Number(nextItem))];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const thirdPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (mathOperatorsPriorities[item] === SECOND || mathOperatorsPriorities[item] === FIRST) {
      throw new TypeError('Unexpected stack!');
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === THIRD) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }

    return result;
  }, Number(stack[0]));
