# devin-playground

A simple JavaScript project with Jest unit tests.

## Project Structure

- `src/`: Contains the source code
  - `mathUtils.js`: Math utility functions
  - `stringUtils.js`: String utility functions
  - `User.js`: User class implementation
- `__tests__/`: Contains Jest unit tests
  - `mathUtils.test.js`: Tests for math utilities
  - `stringUtils.test.js`: Tests for string utilities
  - `User.test.js`: Tests for User class

## Running Tests

To run the tests:

```bash
cd work
npm test
```

To run tests with coverage:

```bash
cd work
npm run test:coverage
```

## Available Functions

### Math Utilities
- `add(a, b)`: Adds two numbers
- `subtract(a, b)`: Subtracts second number from first
- `multiply(a, b)`: Multiplies two numbers
- `divide(a, b)`: Divides first number by second

### String Utilities
- `capitalize(str)`: Capitalizes the first letter of a string
- `reverse(str)`: Reverses a string
- `countOccurrences(str, substr)`: Counts occurrences of a substring in a string

### User Class
- `new User(name, email, age)`: Creates a new user
- `getInfo()`: Gets user information
- `isAdult()`: Checks if user is 18 or older
- `updateEmail(newEmail)`: Updates user's email
