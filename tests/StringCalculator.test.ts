
import { add } from '../src/stringCalculator';

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

test('multiple numbers separated by comma returns their sum', () => {
    expect(add("9,4,3")).toBe(16);
});