const { add, subtract, multiply, divide } = require('../src/mathUtils');

describe('Math Utilities', () => {
  describe('add function', () => {
    test('adds two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds a positive and a negative number correctly', () => {
      expect(add(2, -3)).toBe(-1);
    });

    test('adds two negative numbers correctly', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('adds zero correctly', () => {
      expect(add(2, 0)).toBe(2);
      expect(add(0, 3)).toBe(3);
      expect(add(0, 0)).toBe(0);
    });
  });

  describe('subtract function', () => {
    test('subtracts two positive numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts a negative number correctly', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    test('subtracts to get a negative result correctly', () => {
      expect(subtract(3, 5)).toBe(-2);
    });

    test('subtracts zero correctly', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  describe('multiply function', () => {
    test('multiplies two positive numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test('multiplies a positive and a negative number correctly', () => {
      expect(multiply(2, -3)).toBe(-6);
      expect(multiply(-2, 3)).toBe(-6);
    });

    test('multiplies two negative numbers correctly', () => {
      expect(multiply(-2, -3)).toBe(6);
    });

    test('multiplies by zero correctly', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });
  });

  describe('divide function', () => {
    test('divides two positive numbers correctly', () => {
      expect(divide(6, 3)).toBe(2);
    });

    test('divides a positive and a negative number correctly', () => {
      expect(divide(6, -3)).toBe(-2);
      expect(divide(-6, 3)).toBe(-2);
    });

    test('divides two negative numbers correctly', () => {
      expect(divide(-6, -3)).toBe(2);
    });

    test('divides with decimal result correctly', () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    test('throws error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });
});
