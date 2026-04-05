function greet(name) {
  return "Hello " + name;
}
module.exports = greet;
const greet = require('./app');

test('check greeting', () => {
  expect(greet("Dev")).toBe("Hello Dev");
});
