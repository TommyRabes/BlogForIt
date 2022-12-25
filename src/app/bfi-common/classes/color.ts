import { HexadecimalParserService } from "../services/hexadecimal-parser.service";
import { errors } from '../resources';
import { colors } from '../constants';
import { Strings } from "../util/strings";
import { Numbers } from "../util/numbers";

export class Color {
    private $red: number = 0;
    private $green: number = 0;
    private $blue: number = 0;
    private $alpha: number = 255;
    static readonly parser: HexadecimalParserService = new HexadecimalParserService();

    get red(): number {
        return this.$red;
    }

    set red(red: number) {
        this.validateColorValue(red);
        this.$red = red;
    }

    get green(): number {
        return this.$green;
    }

    set green(green: number) {
        this.validateColorValue(green);
        this.$green = green;
    }

    get blue(): number {
        return this.$blue;
    }

    set blue(blue: number) {
        this.validateColorValue(blue);
        this.$blue = blue;
    }

    get alpha(): number {
        return this.$alpha;
    }

    set alpha(alpha: number) {
        this.validateColorValue(alpha);
        this.$alpha = alpha;
    }

    public constructor();
    public constructor(hex: string);
    public constructor(red: number, green: number, blue: number);
    public constructor(red: number, green: number, blue: number, alpha: number);
    constructor(...args: any[]) {
        const colorValues = this.parseRGBA(...args);
        (['red', 'green', 'blue', 'alpha'] as (keyof Omit<Color, 'toCss' | 'luminance' | 'contrast'>)[])
            .forEach((color, index) => {
                this[color] = colorValues[index];
            });
    }

    private parseRGBA(...args: any[]): number[] {
        const colorValues = [0, 0, 0, 255];
        if (args.length === 1) {
            const rgbaCode = this.formatRGBA(args[0] as string);
            const parsedValues = this.parseRGBAString(rgbaCode);
            colorValues.splice(0, rgbaCode.length/2, ...parsedValues);
        } else {
            colorValues.splice(0, args.length, ...(args as number[]));
        }
        return colorValues;
    }

    private formatRGBA(rgbaCode: string): string {
        let hex = rgbaCode.startsWith('#') ? rgbaCode.slice(1) : rgbaCode;

        if (hex.length === 3 || hex.length === 4) {
            hex = this.replicateDigits(hex);
        }

        if (hex.length !== 6 && hex.length !== 8) {
            throw new Error(errors.INVALID_COLOR_HEXADECIMAL_REPRESENTATION);
        }

        return hex;
    }

    private parseRGBAString(rgbaCode: string): number[] {
        return Strings.chunkSplit(rgbaCode, 2).map(subhex => {
            const colorValue = Color.parser.parse(subhex);
            if (isNaN(colorValue)) {
                throw new Error(errors.INVALID_COLOR_HEXADECIMAL_REPRESENTATION);
            }
            return colorValue;
        });
    }

    private replicateDigits(shorthand: string) {
        let expandedNotation = '';
        for (const digit of shorthand) {
            expandedNotation = expandedNotation + digit.repeat(2);
        }
        return expandedNotation;
    }

    toCss(): string {
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${+(this.alpha/255).toFixed(2)})`;
    }

    contrast(color: Color): number {
        const luminances = [this.luminance(), color.luminance()];
        return +((Math.max(...luminances) + 0.05) / (Math.min(...luminances) + 0.05)).toFixed(2);
    }

    // https://www.w3.org/WAI/WCAG21/Techniques/general/G18.html
    luminance(): number {
        const colorsLuminance = (['red', 'green', 'blue'] as ('red'|'green'|'blue')[]).map(color => this.getPrimaryColorLuminance(color));
        return +Numbers.sum(colorsLuminance).toFixed(3);
    }

    private getPrimaryColorLuminance(primaryColor: 'red'|'green'|'blue'): number {
        const { factors, parameters } = colors.luminance;
        const colorValue = this[primaryColor] / 255;
        return (colorValue <= parameters.condition ? colorValue / parameters.divider : ((colorValue + parameters.complement) / parameters.divider2) ** parameters.power) * factors[primaryColor];
    }

    private validateColorValue(color: number): void {
        if (color < 0) {
            throw new Error(errors.NEGATIVE_COLOR_VALUE_PARAMETER);
        }
        if (color > 255) {
            throw new Error(errors.COLOR_VALUE_GREATER_THAN_255);
        }
    }

    static fromHex(hex: string): Color {
        return new Color(hex);
    }

    static black(): Color {
        return Color.fromHex('#000');
    }

    static white(): Color {
        return Color.fromHex('#fff');
    }
}
