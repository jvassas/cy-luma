import topNav from "../../pages/topNav";
import createAccountPage from "../../pages/createAccountPage";
import myAccountPage from "../../pages/myAccountPage";
import utils from "../../support/utils";

describe("Create Account tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should allow a user to create an account", () => {
    topNav.clickCreateAccount();
    const timestamp = Date.now();
    const firstName = "Jacob";
    const lastName = "Test";
    const fullName = `${firstName} ${lastName}`;
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
    myAccountPage.assertAccountInfo(fullName, email);
  });

  it("Should throw an error message when first name is missing", () => {
    topNav.clickCreateAccount();
    const timestamp = Date.now();
    const lastName = "Test";
    const email = `jacobTest${timestamp}@test.com`;
    const pw = "Password123$5!";
    createAccountPage.fillLastName(lastName);
    createAccountPage.fillEmail(email);
    createAccountPage.fillPassword(pw);
    createAccountPage.fillConfirmPassword(pw);
    createAccountPage.clickCreateAccountBtn();
    utils.assertFieldIsRequired("firstname");
  });

  it("Should throw an error message when last name is missing", () => {
    topNav.clickCreateAccount();
    const timestamp = Date.now();
    const firstName = "Jacob";
    const email = `jacobTest${timestamp}@test.com`;
    const pw = "Password123$5!";
    createAccountPage.fillFirstName(firstName);
    createAccountPage.fillEmail(email);
    createAccountPage.fillPassword(pw);
    createAccountPage.fillConfirmPassword(pw);
    createAccountPage.clickCreateAccountBtn();
    utils.assertFieldIsRequired("lastname");
  });

  it("Should throw an error message when email is missing", () => {
    topNav.clickCreateAccount();
    const firstName = "Jacob";
    const lastName = "Test";
    const pw = "Password123$5!";
    createAccountPage.fillFirstName(firstName);
    createAccountPage.fillLastName(lastName);
    createAccountPage.fillPassword(pw);
    createAccountPage.fillConfirmPassword(pw);
    createAccountPage.clickCreateAccountBtn();
    utils.assertFieldIsRequired("email_address");
  });

  it("Should throw an error message when password is missing", () => {
    topNav.clickCreateAccount();
    const timestamp = Date.now();
    const firstName = "Jacob";
    const lastName = "Test";
    const email = `jacobTest${timestamp}@test.com`;
    const pw = "Password123$5!";
    createAccountPage.fillFirstName(firstName);
    createAccountPage.fillLastName(lastName);
    createAccountPage.fillEmail(email);
    createAccountPage.fillConfirmPassword(pw);
    createAccountPage.clickCreateAccountBtn();
    utils.assertFieldIsRequired("password");
  });

  it("Should throw an error message when confirm password is missing", () => {
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
    createAccountPage.clickCreateAccountBtn();
    utils.assertFieldIsRequired("password-confirmation");
  });

  it("Should throw an error message when password does not meet the length requirements", () => {
    topNav.clickCreateAccount();
    const timestamp = Date.now();
    const firstName = "Jacob";
    const lastName = "Test";
    const email = `jacobTest${timestamp}@test.com`;
    const pw = "pw";
    createAccountPage.fillFirstName(firstName);
    createAccountPage.fillLastName(lastName);
    createAccountPage.fillEmail(email);
    createAccountPage.fillPassword(pw);
    createAccountPage.clickCreateAccountBtn();
    createAccountPage.assertPwLengthError();
  });

  it("Should throw an error message when password does not meet the requirements", () => {
    topNav.clickCreateAccount();
    const timestamp = Date.now();
    const firstName = "Jacob";
    const lastName = "Test";
    const email = `jacobTest${timestamp}@test.com`;
    const pw = "password";
    createAccountPage.fillFirstName(firstName);
    createAccountPage.fillLastName(lastName);
    createAccountPage.fillEmail(email);
    createAccountPage.fillPassword(pw);
    createAccountPage.clickCreateAccountBtn();
    createAccountPage.assertPwSpecsError();
  });

  it("Should throw an error message when password and confirm password does not match", () => {
    topNav.clickCreateAccount();
    const timestamp = Date.now();
    const firstName = "Jacob";
    const lastName = "Test";
    const email = `jacobTest${timestamp}@test.com`;
    const pw = "Password12!";
    const cPw = "password1!";
    createAccountPage.fillFirstName(firstName);
    createAccountPage.fillLastName(lastName);
    createAccountPage.fillEmail(email);
    createAccountPage.fillPassword(pw);
    createAccountPage.fillConfirmPassword(cPw);
    createAccountPage.clickCreateAccountBtn();
    createAccountPage.assertPwDoesNotMatch();
  });

  it("Should throw an error message when the email already exists in the system", () => {
    topNav.clickCreateAccount();
    const firstName = "Jacob";
    const lastName = "Test";
    const email = "test@email.com";
    const pw = "Password12!";
    const cPw = "Password12!";
    createAccountPage.fillFirstName(firstName);
    createAccountPage.fillLastName(lastName);
    createAccountPage.fillEmail(email);
    createAccountPage.fillPassword(pw);
    createAccountPage.fillConfirmPassword(cPw);
    createAccountPage.clickCreateAccountBtn();
    createAccountPage.assertEmailAlreadyExistsError();
  });
});
