
export function add(str: string): number {
    if (str === "") return 0;
    const inputNumbers = str.split(/[\n,]+/);
    return inputNumbers
        .map(num => Number(num))
        .filter(num => !isNaN(num))
        .reduce((sum, num) => sum + num, 0);
}

