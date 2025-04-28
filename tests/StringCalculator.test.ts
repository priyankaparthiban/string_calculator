
import { add } from '../src/stringCalculator';

// Test that an empty string returns 0
test('empty string returns 0', () => {
    expect(add("")).toBe(0);
});

// Test that single number returns the number
test('single number returns the number', () => {
    expect(add("5")).toBe(5);
});