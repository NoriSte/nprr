// These tests are useful to check whether nprr passes the correct params to the chosen command

it.skip("Fail", () => {
  expect(true).toBe(false);
});
it.skip("Fail too", () => {
  expect(true).toBe(false);
});
it("Trap succeed", () => {
  expect(true).toBe(true);
});
