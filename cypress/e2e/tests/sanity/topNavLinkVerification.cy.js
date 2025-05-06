import topNav from "../../../pages/topNav";

describe("Top Navigation links verification", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should navigate to the sign in page", () => {
    topNav.clickSignIn();
    cy.url().should("include", "customer/account/login");
  });

  it("Should navigate to the create account page", () => {
    topNav.clickCreateAccount();
    cy.url().should("include", "customer/account/create/");
  });
});
