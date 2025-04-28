// test/stringCalculator.test.ts
import { add } from '../src/stringCalculator.ts';  // Import the add function

test('empty string returns 0', () => {
    expect(add("")).toBe(0);  // Test that an empty string returns 0
});
