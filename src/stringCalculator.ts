
export function add(str: string): number {
    if (str === "") return 0;
    const inputNumbers = str.split(/[\n,]+/);
    return inputNumbers.reduce((sum, num) => sum + Number(num), 0);
}


