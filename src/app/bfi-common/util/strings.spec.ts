import { Strings } from './strings';
import { errors } from './constants';

describe('Strings', () => {
  it('should create an instance', () => {
    expect(new Strings()).toBeTruthy();
  });

  describe('String splitting tests', () => {
    it('should split string into fixed-size chunks', () => {
      const string = 'LoremIpsum';
      const chunks = Strings.chunkSplit(string, 2);

      expect(chunks).toBeTruthy();
      expect(chunks).toHaveSize(5);
      expect(chunks).toEqual(['Lo', 're', 'mI', 'ps', 'um']);
    });

    it('should split string into fixed-size chunks except the last one if there is remainder', () => {
      const string = 'Lorem ipsum';
      const chunks = Strings.chunkSplit(string, 3);

      expect(chunks).toBeTruthy();
      expect(chunks).toHaveSize(4);
      expect(chunks).toEqual(['Lor', 'em ', 'ips', 'um']);
    });

    it('should return empty array when string is empty', () => {
      const string = '';
      const chunks = Strings.chunkSplit(string, 3);

      expect(chunks).toBeTruthy();
      expect(chunks).toHaveSize(0);
    });

    it('should throw an error when chunk size is not positive', () => {
      const string = 'Lorem ipsum';
      expect(() => Strings.chunkSplit(string, 0)).toThrowError(errors.Strings.chunkSplit.NON_POSITIVE_CHUNK_SIZE);
      expect(() => Strings.chunkSplit(string, -1)).toThrowError(errors.Strings.chunkSplit.NON_POSITIVE_CHUNK_SIZE);
    });

    it('should throw an error when chunk size is a floating-point number', () => {
      const string = 'Lorem ipsum';
      expect(() => Strings.chunkSplit(string, Math.PI)).toThrowError(errors.Strings.chunkSplit.FLOATING_POINT_CHUNK_SIZE);
    });
  });
});
