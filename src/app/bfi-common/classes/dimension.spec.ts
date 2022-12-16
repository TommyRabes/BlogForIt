import { Dimension } from './dimension';
import { errors } from '../resources';

describe('Dimension', () => {
  it('should create a Dimension with default values', () => {
    const dimension = new Dimension();
    expect(dimension).toBeTruthy();
    expect(dimension.width).toBe(0);
    expect(dimension.height).toBe(0);
  });

  it('should create a Dimension with forwarded parameters', () => {
    const dimension = new Dimension(500, 300);
    expect(dimension.width).toBe(500);
    expect(dimension.height).toBe(300);
  });

  it('should throw error when a negative width value is forwarded', () => {
    expect(() => new Dimension(-5, 300)).toThrowError(errors.NEGATIVE_VALUE_PARAMETER);
  });

  it('should throw error when a negative height value is forwarded', () => {
    expect(() => new Dimension(500, -5)).toThrowError(errors.NEGATIVE_VALUE_PARAMETER);
  });
});
