const firstName_Input = "#firstname";
const lastName_Input = "#lastname";
const email_Input = "#email_address";
const password_Input = "#password";
const confirmPassword_Input = "#password-confirmation";

class CreateAccountPage {
  fillFirstName(firstName) {
    cy.get(firstName_Input).type(firstName);
  }

  fillLastName(lastName) {
    cy.get(lastName_Input).type(lastName);
  }

  fillEmail(email) {
    cy.get(email_Input).type(email);
  }

  fillPassword(pw) {
    cy.get(password_Input).type(pw);
  }

  fillConfirmPassword(pw) {
    cy.get(confirmPassword_Input).type(pw);
  }

  clickCreateAccountBtn() {
    cy.contains("button", "Create an Account").click();
  }

  // Error's
  getConfirmPwError() {
    return cy.get("#password-confirmation-error");
  }

  assertPwDoesNotMatch() {
    this.getConfirmPwError()
      .should("be.visible")
      .and("have.text", "Please enter the same value again.");
  }

  getPwFormatError() {
    return cy.get("#password-error");
  }

  assertPwLengthError() {
    this.getPwFormatError()
      .should("be.visible")
      .and(
        "have.text",
        "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored."
      );
  }

  assertPwSpecsError() {
    this.getPwFormatError()
      .should("be.visible")
      .and(
        "have.text",
        "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters."
      );
  }

  getEmailExistsError() {
    return cy.get('div[data-bind*="prepareMessageForHtml"]', { timeout: 5000 });
  }

  assertEmailAlreadyExistsError() {
    this.getEmailExistsError()
      .should("be.visible")
      .and("contain", "There is already an account with this email address.");
  }
}

export default new CreateAccountPage();
