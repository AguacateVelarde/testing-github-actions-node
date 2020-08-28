function sum(a, b) {
  return a + b; 
}

test("Adding 1 + 1 equals 2", () => {
  expect(sum(1, 1)).toBe(2);
});

test("Adding 2 + 2 equals 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("Adding 3 + 3 equals 6", () => {
  expect(sum(3, 3)).toBe(6);
});
