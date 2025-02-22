function foo(a, b) {
  if (b === 0) {
    throw new Error("Division by zero"); // Handle division by zero explicitly
  } else if (a === 0) {
    return 0;
  }
  return a / b;
}

console.log(foo(10, 0)); // Throws an error
console.log(foo(0, 10)); // Returns 0
console.log(foo(10, 2)); // Returns 5