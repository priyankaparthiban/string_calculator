
import { add } from '../src/stringCalculator';

describe('String Calculator', () => {
    // Test that an empty string returns 0
    test('empty string returns 0', () => {
        expect(add("")).toBe(0);
    });

    // Test that single number returns the number
    test('single number returns the number', () => {
        expect(add("5")).toBe(5);
    });

    // Test that two numbers separated by comma returns their sum
    test('two numbers separated by comma returns their sum', () => {
        expect(add("7,2")).toBe(9);
    });

    // Test that multiple numbers separated by comma returns their sum
    test('multiple numbers separated by comma returns their sum', () => {
        expect(add("9,4,3")).toBe(16);
    });

    // Test that numbers separated by newlines return their sum
    test('numbers separated by newlines return their sum', () => {
        expect(add("1\n2\n3")).toBe(6);
    });

    // Test that numbers separated by newlines return their sum
    test('numbers separated by commas and newlines return their sum', () => {
        expect(add("1\n2,3")).toBe(6);
    });
});
