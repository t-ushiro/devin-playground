const { capitalize, reverse, countOccurrences } = require('../src/stringUtils');

describe('String Utilities', () => {
  describe('capitalize function', () => {
    test('capitalizes the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('returns empty string for empty input', () => {
      expect(capitalize('')).toBe('');
    });

    test('returns empty string for null or undefined input', () => {
      expect(capitalize(null)).toBe('');
      expect(capitalize(undefined)).toBe('');
    });

    test('returns empty string for non-string input', () => {
      expect(capitalize(123)).toBe('');
      expect(capitalize(true)).toBe('');
    });

    test('handles already capitalized strings', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });

    test('only capitalizes the first letter', () => {
      expect(capitalize('hello world')).toBe('Hello world');
    });
  });

  describe('reverse function', () => {
    test('reverses a string correctly', () => {
      expect(reverse('hello')).toBe('olleh');
    });

    test('reverses a string with spaces correctly', () => {
      expect(reverse('hello world')).toBe('dlrow olleh');
    });

    test('returns empty string for empty input', () => {
      expect(reverse('')).toBe('');
    });

    test('returns empty string for null or undefined input', () => {
      expect(reverse(null)).toBe('');
      expect(reverse(undefined)).toBe('');
    });

    test('returns empty string for non-string input', () => {
      expect(reverse(123)).toBe('');
      expect(reverse(true)).toBe('');
    });
  });

  describe('countOccurrences function', () => {
    test('counts single occurrence correctly', () => {
      expect(countOccurrences('hello world', 'world')).toBe(1);
    });

    test('counts multiple occurrences correctly', () => {
      expect(countOccurrences('hello hello hello', 'hello')).toBe(3);
    });

    test('returns 0 when substring not found', () => {
      expect(countOccurrences('hello world', 'goodbye')).toBe(0);
    });

    test('counts overlapping occurrences correctly', () => {
      expect(countOccurrences('abababa', 'aba')).toBe(3);
    });

    test('returns 0 for empty string or substring', () => {
      expect(countOccurrences('', 'hello')).toBe(0);
      expect(countOccurrences('hello', '')).toBe(0);
    });

    test('returns 0 for null or undefined inputs', () => {
      expect(countOccurrences(null, 'hello')).toBe(0);
      expect(countOccurrences('hello', null)).toBe(0);
      expect(countOccurrences(undefined, 'hello')).toBe(0);
      expect(countOccurrences('hello', undefined)).toBe(0);
    });

    test('returns 0 for non-string inputs', () => {
      expect(countOccurrences(123, 'hello')).toBe(0);
      expect(countOccurrences('hello', 123)).toBe(0);
    });
  });
});
