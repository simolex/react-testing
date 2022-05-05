const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HelloPage extends Page {
  /**
   * define selectors using getter methods
   */
  get searchInput() {
    return $("#search");
  }

  get toggleBtn() {
    return $("#toggle");
  }

  get helloHeader() {
    return $("#hello");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async toggleTitleWithInput(text) {
    await this.searchInput.setValue(text);
    await this.toggleBtn.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("hello");
  }
}

module.exports = new HelloPage();
