import { Numbers } from './numbers';

describe('Numbers', () => {
  it('should create an instance', () => {
    expect(new Numbers()).toBeTruthy();
  });

  describe('Number sum tests', () => {
    it('should return the sum of the numbers', () => {
      expect(Numbers.sum([5, 12, 58, 138, 0, 8, -16])).toBe(205);
    });

    it('should return zero if array is empty', () => {
      expect(Numbers.sum([])).toBe(0);
    });
  });
});
