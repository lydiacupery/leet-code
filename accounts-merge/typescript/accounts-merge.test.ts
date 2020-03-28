import { accountsMerge } from "./accounts-merge";

describe("creates binary tree out of preorder and inorder", () => {
  it("1", () => {
    const result = accountsMerge([
      ["John", "johnsmith@mail.com", "john00@mail.com"],
      ["John", "johnnybravo@mail.com"],
      ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
      ["Mary", "mary@mail.com"]
    ]);
    expect(result).toEqual([
      [
        "John",
        "john00@mail.com",
        "john_newyork@mail.com",
        "johnsmith@mail.com"
      ],
      ["John", "johnnybravo@mail.com"],
      ["Mary", "mary@mail.com"]
    ]);
  });
});
