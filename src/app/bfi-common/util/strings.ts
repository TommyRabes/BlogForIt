import { errors } from "./constants";

export class Strings {
    static chunkSplit(str: string, chunkSize: number): string[] {
        if (chunkSize < 1) {
            throw new Error(errors.Strings.chunkSplit.NON_POSITIVE_CHUNK_SIZE);
        }
        if (Math.trunc(chunkSize) !== chunkSize) {
            throw new Error(errors.Strings.chunkSplit.FLOATING_POINT_CHUNK_SIZE);
        }
        return str.match(new RegExp(`.{1,${chunkSize}}`, 'g')) || [];
    }
}
