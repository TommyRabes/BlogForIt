export class Numbers {
    static sum(numbers: number[]): number {
        return numbers.reduce((sum, prev) => sum + prev, 0);
    }
}
