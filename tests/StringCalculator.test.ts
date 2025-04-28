
import { add } from '../src/stringCalculator';

// Test that an empty string returns 0
test('empty string returns 0', () => {
    expect(add("")).toBe(0);
});
