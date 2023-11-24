// Problem 1 Simple Equation
function simpleEquations(a: number, b: number, c: number): number[] | string {
  const limit: number = Math.floor(Math.sqrt(c)) + 1;

  for (let x = -limit; x <= limit; x++) {
    for (let y = -limit; y <= limit; y++) {
      const z: number = a - x - y;
      if (x * z === b && x ** 2 + y ** 2 + z ** 2 === c) {
        return [x, y, z];
      }
    }
  }

  return "No solution.";
}

// Test cases
console.log(simpleEquations(1, 2, 3)); // No solution
console.log(simpleEquations(6, 6, 14)); // [1, 2, 3]
