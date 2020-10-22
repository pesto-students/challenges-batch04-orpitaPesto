// write your own test cases
/* eslint linebreak-style: ["error", "windows"] */
import { flipArgs } from './flipArgs';

describe('Flip the arguments', () => {
  test('should flip the set of arguments', () => {
    expect(flipArgs(1, 2, 3, 4, 5)).toEqual([5, 4, 3, 2, 1]);
    expect(flipArgs('a', 'b', 'c', 'd', 'e')).toEqual(['e', 'd', 'c', 'b', 'a']);
  });
});
