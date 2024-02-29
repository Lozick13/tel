import { Validator } from "../app";
const validator = new Validator();

test("validator 8 (927) 000-00-00", () => {
  const result = validator.validateTel("8 (927) 000-00-00");
  const expected = "+79270000000";
  expect(result).toBe(expected);
});
test("validator +7 960 000 00 00", () => {
  const result = validator.validateTel("+7 960 000 00 00");
  const expected = "+79600000000";
  expect(result).toBe(expected);
});
test("validator +86 000 000 0000", () => {
  const result = validator.validateTel("+86 000 000 0000");
  const expected = "+860000000000";
  expect(result).toBe(expected);
});
test("validator broken number (missing plus)", () => {
  const result = validator.validateTel("6 000 000 0000");
  const expected = "error";
  expect(result).toBe(expected);
});
test("validator broken number (a lot of numbers)", () => {
  const result = validator.validateTel("+6 000 000 0000 8");
  const expected = "error";
  expect(result).toBe(expected);
});
