class ShippingPage {
  clickNextBtn() {
    cy.get('button[data-role="opc-continue"]').click();
  }

  selectShippingMethod(methodValue) {
    cy.get(`input[type="radio"][value="${methodValue}"]`).check({
      force: true,
    });
  }

  fillCompanyName(company) {
    cy.get('input[name="company"]').type(company);
  }

  assertZipCodeWarning() {
    cy.get(".message.warning")
      .should("be.visible")
      .and(
        "contain.text",
        "Provided Zip/Postal Code seems to be invalid. Example: 12345-6789; 12345. If you believe it is the right one you can ignore this notice."
      );
  }

  assertShippingMethodMissingNotice() {
    cy.get(".message.notice")
      .should("be.visible")
      .and(
        "contain.text",
        "The shipping method is missing. Select the shipping method and try again."
      );
  }

  getPwInput() {
    return cy.get("#customer-password");
  }

  assertPwInputIsVisible() {
    this.getPwInput().should("be.visible");
  }

  fillPwInput(pw) {
    cy.get("#customer-password").type(pw);
  }

  fillEmailInput(email) {
    cy.get("#customer-email").type(email);
  }

  clickLoginBtn() {
    cy.get('button[data-action="checkout-method-login"]').click();
  }

  assertEmailInputNotVisible() {
    cy.get("#customer-email").should("not.be.visible");
  }
}

export default new ShippingPage();
