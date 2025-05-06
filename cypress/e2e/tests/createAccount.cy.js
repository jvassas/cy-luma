import topNav from "../../pages/topNav";
import createAccountPage from "../../pages/createAccountPage";
import myAccountPage from "../../pages/myAccountPage";

describe("Create Account", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should allow a user to create an account", () => {
    topNav.clickCreateAccount();
    const timestamp = Date.now();
    // If time permits, randomly create user with names.json file
    const firstName = "Jacob";
    const lastName = "Test";
    const email = `jacobTest${timestamp}@test.com`;
    const pw = "Password123$5!";
    createAccountPage.fillFirstName(firstName);
    createAccountPage.fillLastName(lastName);
    createAccountPage.fillEmail(email);
    createAccountPage.fillPassword(pw);
    createAccountPage.fillConfirmPassword(pw);
    createAccountPage.clickCreateAccountBtn();
    cy.url().should("include", "customer/account/");
    myAccountPage.assertSuccessMessage();
  });

  it("Should allow a user to create an account", () => {
    topNav.clickCreateAccount();
    const timestamp = Date.now();
    const firstName = "Jacob";
    const lastName = "Test";
    const email = `jacobTest${timestamp}@test.com`;
    const pw = "Password123$5!";
    createAccountPage.fillFirstName(firstName);
    createAccountPage.fillLastName(lastName);
    createAccountPage.fillEmail(email);
    createAccountPage.fillPassword(pw);
    createAccountPage.fillConfirmPassword(pw);
    createAccountPage.clickCreateAccountBtn();
    cy.url().should("include", "customer/account/");
    myAccountPage.assertSuccessMessage();
  });
});
