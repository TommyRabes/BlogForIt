import { errors } from '../resources';

export class Dimension {
    private $width: number = 0;
    private $height: number = 0;

    constructor(width: number = 0, height: number = 0) {
        this.width = width;
        this.height = height;
    }

    get width(): number {
        return this.$width;
    }

    private set width(width: number) {
        if (width < 0) {
            throw new Error(errors.NEGATIVE_VALUE_PARAMETER);
        }
        this.$width = width;
    }

    get height(): number {
        return this.$height;
    }

    private set height(height: number) {
        if (height < 0) {
            throw new Error(errors.NEGATIVE_VALUE_PARAMETER);
        }
        this.$height = height;
    }
}
