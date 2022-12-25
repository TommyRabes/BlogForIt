import { Color } from './color';
import { errors } from '../resources';

describe('Color', () => {
  it('should create an instance', () => {
    const color = new Color();
    expect(color).toBeTruthy();
    expect(Color.parser).toBeTruthy();
    expect(color.red).toBe(0);
    expect(color.green).toBe(0);
    expect(color.blue).toBe(0);
    expect(color.alpha).toBe(255);
  });

  it('should create a Color with the forwarded RGB numeric values', () => {
    const color = new Color(210, 25, 160);
    expect(color.red).toBe(210);
    expect(color.green).toBe(25);
    expect(color.blue).toBe(160);
    expect(color.alpha).toBe(255);
  });

  it('should create a Color with the forwarded RGBA numeric values', () => {
    const color = new Color(210, 25, 160, 200);
    expect(color.red).toBe(210);
    expect(color.green).toBe(25);
    expect(color.blue).toBe(160);
    expect(color.alpha).toBe(200);
  });

  it('should throw an error while creating a Color with negative RGBA numeric values', () => {
    expect(() => new Color(-210, 25, 160, 200)).toThrowError(errors.NEGATIVE_COLOR_VALUE_PARAMETER);
    expect(() => new Color(210, -25, 160, 200)).toThrowError(errors.NEGATIVE_COLOR_VALUE_PARAMETER);
    expect(() => new Color(210, 25, -160, 200)).toThrowError(errors.NEGATIVE_COLOR_VALUE_PARAMETER);
    expect(() => new Color(210, 25, 160, -200)).toThrowError(errors.NEGATIVE_COLOR_VALUE_PARAMETER);
  });

  it('should throw an error while creating a Color with RGBA numeric values greater than 255', () => {
    expect(() => new Color(256, 25, 160, 200)).toThrowError(errors.COLOR_VALUE_GREATER_THAN_255);
    expect(() => new Color(210, 256, 160, 200)).toThrowError(errors.COLOR_VALUE_GREATER_THAN_255);
    expect(() => new Color(210, 25, 256, 200)).toThrowError(errors.COLOR_VALUE_GREATER_THAN_255);
    expect(() => new Color(210, 25, 160, 256)).toThrowError(errors.COLOR_VALUE_GREATER_THAN_255);
  });

  it('should create a Color from a hexadecimal number', () => {
    spyOn(Color.parser, 'parse')
      .withArgs('7e').and.returnValue(126)
      .withArgs('a5').and.returnValue(165)
      .withArgs('91').and.returnValue(145);
    const color = new Color('7ea591');
    expect(color.red).toBe(126);
    expect(color.green).toBe(165);
    expect(color.blue).toBe(145);
    expect(color.alpha).toBe(255);
  });

  it('should parse a Color from a hexadecimal number', () => {
    spyOn(Color.parser, 'parse')
      .withArgs('D6').and.returnValue(214)
      .withArgs('29').and.returnValue(41)
      .withArgs('3E').and.returnValue(62);
    const color = Color.fromHex('D6293E');
    expect(color.red).toBe(214);
    expect(color.green).toBe(41);
    expect(color.blue).toBe(62);
    expect(color.alpha).toBe(255);
  });

  it(`should create a Color from a hexadecimal number prefixed by '#'`, () => {
    spyOn(Color.parser, 'parse')
      .withArgs('7e').and.returnValue(126)
      .withArgs('a5').and.returnValue(165)
      .withArgs('91').and.returnValue(145);
    const color = new Color('#7ea591');
    expect(color.red).toBe(126);
    expect(color.green).toBe(165);
    expect(color.blue).toBe(145);
    expect(color.alpha).toBe(255);
  });

  it(`should create a Color from a 3-characters long hexadecimal`, () => {
    spyOn(Color.parser, 'parse').withArgs('ff').and.returnValue(255);
    const color = new Color('#fff');
    expect(color.red).toBe(255);
    expect(color.green).toBe(255);
    expect(color.blue).toBe(255);
    expect(color.alpha).toBe(255);
  });

  it(`should create a Color with its alpha value from a 4-characters long hexadecimal`, () => {
    spyOn(Color.parser, 'parse')
      .withArgs('ff').and.returnValue(255)
      .withArgs('55').and.returnValue(85);
    const color = new Color('#fff5');
    expect(color.red).toBe(255);
    expect(color.green).toBe(255);
    expect(color.blue).toBe(255);
    expect(color.alpha).toBe(85);
  });

  it(`should create a Color with its alpha value from a 8-characters long hexadecimal`, () => {
    const color = new Color('#ffffff55');
    spyOn(Color.parser, 'parse')
      .withArgs('ff').and.returnValue(255)
      .withArgs('55').and.returnValue(85);
    expect(color.red).toBe(255);
    expect(color.green).toBe(255);
    expect(color.blue).toBe(255);
    expect(color.alpha).toBe(85);
  });

  it(`should throw an error while creating a Color from a invalid color hexadecimal`, () => {
    expect(() => new Color('7ea591d53a8511')).toThrowError(errors.INVALID_COLOR_HEXADECIMAL_REPRESENTATION);
  });

  it(`should throw an error while creating a Color from an unparseable color hexadecimal`, () => {
    spyOn(Color.parser, 'parse').and.returnValue(NaN);
    expect(() => new Color('#ffffff55')).toThrowError(errors.INVALID_COLOR_HEXADECIMAL_REPRESENTATION);
  });

  it('should return a css rgba representation', () => {
    const color = new Color(250, 39, 154, 150);
    expect(color.toCss()).toBe('rgba(250, 39, 154, 0.59)');
  });

  it('should have a luminance value of 1 when color is white', () => {
    expect(new Color(255, 255, 255).luminance()).toBe(1);
  });

  it('should have a luminance value of 0 when color is black', () => {
    expect(new Color(0, 0, 0).luminance()).toBe(0);
  });

  it('should return the correct luminance value', () => {
    expect(new Color(250, 39, 154).luminance()).toBe(0.241);
  });

  it('should return the contrast value between two colors', () => {
    expect(new Color(250, 39, 154).contrast(new Color())).toBe(5.82);
  });

  it('should return the same contrast value when the two colors are swapped', () => {
    expect(new Color().contrast(new Color(250, 39, 154))).toBe(5.82);
  });
});
