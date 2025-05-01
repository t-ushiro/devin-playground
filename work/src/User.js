/**
 * User class for managing user data
 */
class User {
  /**
   * Create a user
   * @param {string} name - User's name
   * @param {string} email - User's email
   * @param {number} age - User's age
   */
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.createdAt = new Date();
  }

  /**
   * Get user's full information
   * @returns {Object} User information
   */
  getInfo() {
    return {
      name: this.name,
      email: this.email,
      age: this.age,
      createdAt: this.createdAt
    };
  }

  /**
   * Check if user is an adult
   * @returns {boolean} True if user is 18 or older
   */
  isAdult() {
    return this.age >= 18;
  }

  /**
   * Update user's email
   * @param {string} newEmail - New email address
   * @returns {boolean} True if update was successful
   */
  updateEmail(newEmail) {
    if (!newEmail || !newEmail.includes('@')) {
      return false;
    }
    this.email = newEmail;
    return true;
  }
}

module.exports = User;
