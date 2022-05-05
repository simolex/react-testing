const HelloPage = require("../pages/hello.page");

describe("My hello world page ", () => {
  it("Should be toggle", async () => {
    await HelloPage.open();

    await HelloPage.toggleTitleWithInput("hello");

    await expect(HelloPage.helloHeader).toBeExisting();
    await HelloPage.toggleBtn.click();
    await expect(HelloPage.helloHeader).not.toBeExisting();
  });

  it("Should not be toggle", async () => {
    await HelloPage.open();

    await HelloPage.toggleTitleWithInput("bye");

    await expect(HelloPage.helloHeader).not.toBeExisting();
  });
});
