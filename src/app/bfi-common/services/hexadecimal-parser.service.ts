import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HexadecimalParserService {

  constructor() { }

  parse(hex: string): number {
    if (!this.isValidHexCode(hex)) {
      return NaN;
    }
    return parseInt(hex, 16);
  }

  // This validation is required as it seems the built-in function 'parseInt' only tries to convert from
  // the first characters and ignore the rest of the string once it encounters an invalidity 
  private isValidHexCode(hex: string): boolean {
    const headlessCode = hex.startsWith('0x') ? hex.substring(2) : hex;
    return /^[a-f\d]+$/i.test(headlessCode);
  }
}
