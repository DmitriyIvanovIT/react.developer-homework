import { parser } from './parser';

describe('Parser correct cases', () => {
  it('1 + 32', () => {
    expect(parser('1 + 32')).toEqual([1, '+', 32]);
  });

  it('11 + 3 * 22', () => {
    expect(parser('11 + 3 * 22')).toEqual([11, '+', 3, '*', 22]);
  });

  it('1 + 32 - 2 + 2', () => {
    expect(parser('1 + 32 - 2 + 2')).toEqual([1, '+', 32, '-', 2, '+', 2]);
  });

  it('5 ! + 8', () => {
    expect(parser('5 ! + 8')).toEqual([5, '!', '+', 8]);
  });

  it('5 ** + 8', () => {
    expect(parser('5 ** + 8')).toEqual([5, '**', '+', 8]);
  });

  it('5 ^ 3 + 8', () => {
    expect(parser('5 ^ 3 + 8')).toEqual([5, '^', 3, '+', 8]);
  });
});

describe('Parser invalid cases', () => {
  it('1 + + 33 - 2', () => {
    expect(() => parser('1 + + 33 - 2')).toThrow(TypeError('Unexpected string'));
  });

  it('1 ! 33 - 2', () => {
    expect(() => parser('1 ! 33 - 2')).toThrow(TypeError('Unexpected string'));
  });
});
