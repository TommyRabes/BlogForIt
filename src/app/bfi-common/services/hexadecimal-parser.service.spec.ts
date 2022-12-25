import { TestBed } from '@angular/core/testing';

import { HexadecimalParserService } from './hexadecimal-parser.service';

describe('HexadecimalParserService', () => {
  let service: HexadecimalParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HexadecimalParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to convert hexadecimal string to base 10 number', () => {
    expect(service.parse('7ea591')).toBe(8299921);
  });

  it(`should be able to convert hexadecimal string prefixed by '0x' to base 10 number`, () => {
    expect(service.parse('0x7ea591')).toBe(8299921);
  });

  it('should not be able to convert an invalid hexadecimal representation', () => {
    expect(service.parse('18q6ed')).toBeNaN();
  });
});
