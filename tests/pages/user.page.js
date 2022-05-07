const Page = require("./Page");

class UsersPage extends Page {
  get loadingTitle() {
    return $("#is-loading");
  }
  get usersList() {
    return $("#users-list");
  }

  get usersItems() {
    return $$("#user-line");
  }

  async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({ timeout: 5000 });
      await this.usersList.waitForDisplayed({ timeout: 5000 });
    } catch (err) {
      return new Error("Не удалось загрузить пользователей");
    }
  }

  async deleteUser() {
    let result;
    try {
      const usersCount = await this.usersItems.length;
      if (!usersCount) {
        throw Error("Пользователи не найдены");
      }

      await this.usersItems[0].$("#user-delete").click();
      //await this.usersItems[0].$("#user-delete").click();

      const usersCountAfterDelete = await this.usersItems.length;
      result = usersCount - usersCountAfterDelete;

      if (result !== 1) {
        throw Error("Удалилось больше  или меньше одного пользователя");
      }
    } catch (err) {
      return new Error("Не удалось удалить пользователя " + err.message);
    }
  }
  open() {
    return super.open("user-test");
  }
}

module.exports = new UsersPage();
