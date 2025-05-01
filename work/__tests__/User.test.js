const User = require('../src/User');

describe('User class', () => {
  let user;
  const testName = 'John Doe';
  const testEmail = 'john@example.com';
  const testAge = 25;
  const fixedDate = new Date('2023-01-01T00:00:00.000Z');

  beforeEach(() => {
    // Save the original Date constructor
    const OriginalDate = global.Date;
    
    // Mock Date constructor
    global.Date = jest.fn(() => fixedDate);
    
    // Restore original Date for specific date strings
    global.Date.parse = OriginalDate.parse;
    global.Date.UTC = OriginalDate.UTC;
    
    user = new User(testName, testEmail, testAge);
  });

  afterEach(() => {
    // Restore the original Date constructor
    jest.restoreAllMocks();
  });

  describe('constructor', () => {
    test('creates a user with the correct properties', () => {
      expect(user.name).toBe(testName);
      expect(user.email).toBe(testEmail);
      expect(user.age).toBe(testAge);
      expect(user.createdAt).toBe(fixedDate);
    });
  });

  describe('getInfo method', () => {
    test('returns the correct user information', () => {
      const info = user.getInfo();
      expect(info).toEqual({
        name: testName,
        email: testEmail,
        age: testAge,
        createdAt: user.createdAt
      });
    });
  });

  describe('isAdult method', () => {
    test('returns true for users 18 or older', () => {
      expect(user.isAdult()).toBe(true);
      
      const adultUser = new User('Adult', 'adult@example.com', 18);
      expect(adultUser.isAdult()).toBe(true);
    });

    test('returns false for users under 18', () => {
      const minorUser = new User('Minor', 'minor@example.com', 17);
      expect(minorUser.isAdult()).toBe(false);
    });
  });

  describe('updateEmail method', () => {
    test('updates email when valid email is provided', () => {
      const newEmail = 'newemail@example.com';
      const result = user.updateEmail(newEmail);
      
      expect(result).toBe(true);
      expect(user.email).toBe(newEmail);
    });

    test('rejects invalid emails', () => {
      const invalidEmail = 'invalid-email';
      const originalEmail = user.email;
      const result = user.updateEmail(invalidEmail);
      
      expect(result).toBe(false);
      expect(user.email).toBe(originalEmail);
    });

    test('rejects empty or null emails', () => {
      const originalEmail = user.email;
      
      expect(user.updateEmail('')).toBe(false);
      expect(user.updateEmail(null)).toBe(false);
      expect(user.updateEmail(undefined)).toBe(false);
      
      expect(user.email).toBe(originalEmail);
    });
  });
});
