const UsersPage = require("../pages/user.page");
var should = require("chai").should();

describe("My testing user page ", () => {
  it("Should be list users", async () => {
    await UsersPage.loadData();
  });

  it("Should be deleted user", async () => {
    await UsersPage.loadData();
    const res = await UsersPage.deleteUser();
    res.should.equal(true);
  });
});
