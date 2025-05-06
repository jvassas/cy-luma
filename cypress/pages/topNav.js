class TopNavPage {
  clickSignIn() {
    cy.contains("a", "Sign In").click();
  }

  clickCreateAccount() {
    cy.contains("a", "Create an Account").click();
  }
}

export default new TopNavPage();
