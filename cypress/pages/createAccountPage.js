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
}

export default new CreateAccountPage();
