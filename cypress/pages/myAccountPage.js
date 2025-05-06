class MyAccountPage {
  getSuccessMessage() {
    return cy.get('div[data-ui-id="message-success"] > div', { timeout: 5000 });
  }

  assertSuccessMessage() {
    this.getSuccessMessage()
      .should("be.visible")
      .and("contain", "Thank you for registering with Main Website Store.");
  }

  getAccountInfoBox() {
    return cy.get(".box-content");
  }

  assertAccountInfo(name, email) {
    this.getAccountInfoBox().should("contain", name).and("contain", email);
  }
}

export default new MyAccountPage();
