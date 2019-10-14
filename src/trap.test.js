it.skip("Fail", () => {
  expect(true).toBe(false);
});
it.skip("Fail too", () => {
  expect(true).toBe(false);
});
it("Trap succeed", () => {
  expect(true).toBe(true);
});
