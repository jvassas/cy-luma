class MyAccountPage {
  getSuccessMessage() {
    return cy.get('div[data-ui-id="message-success"] > div', { timeout: 5000 });
  }

  assertSuccessMessage() {
    this.getSuccessMessage()
      .should("be.visible")
      .and("contain", "Thank you for registering with Main Website Store.");
  }
}

export default new MyAccountPage();
