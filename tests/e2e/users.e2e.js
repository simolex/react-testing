const UsersPage = require("../pages/user.page");

describe("My testing user page ", () => {
  it("Should be list users", async () => {
    const err = await UsersPage.loadData().catch((error) => error);
    expect(err?.message).toBeUndefined();
  });

  it("Should be deleted user", async () => {
    await UsersPage.loadData();
    const err = await UsersPage.deleteUser().catch((error) => error);
    expect(err?.message).toBeUndefined();
  });
});
