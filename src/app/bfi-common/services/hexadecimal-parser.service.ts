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
    const headlessCode = this.removeHexPrefix(hex);
    return this.isMadeOfHexChar(headlessCode);
  }

  private removeHexPrefix(hex: string): string {
    return hex.startsWith('0x') ? hex.substring(2) : hex;
  }

  private isMadeOfHexChar(code: string): boolean {
    return /^[a-f\d]+$/i.test(code);
  }
}
