describe("String Calculator", () => {
  // Test for an empty string
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  // Test for a single number
  it("should return the number itself when only one number is given", () => {
    expect(add("1")).toBe(1);
  });

  // Test for multiple numbers separated by commas
  it("should return the sum of numbers separated by commas", () => {
    expect(add("1,5")).toBe(6);
  });

  // Test for numbers separated by newlines
  it("should handle newlines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  // Test for custom delimiter
  it("should handle custom delimiters specified in the input", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  // Test for negative numbers
  it("should throw an exception if there are negative numbers", () => {
    expect(() => add("1,-2")).toThrowError("negative numbers not allowed: -2");
  });

  // Test for multiple negative numbers
  it("should throw an exception with all negative numbers in the message", () => {
    expect(() => add("1,-2,-3")).toThrowError(
      "negative numbers not allowed: -2, -3"
    );
  });
});
