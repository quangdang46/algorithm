function fibonacci(n) {
  const solutions = new Array(n + 1);
  solutions[0] = 0;
  solutions[1] = 1;
  for (let i = 2; i <= n; i++) {
    // The i-th term is the sum of the previous two terms
    solutions[i] = solutions[i - 1] + solutions[i - 2];
  }

  // Return the solution for the n-th term
  return solutions[n];
}
