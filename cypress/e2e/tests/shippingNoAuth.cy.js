import actionBanner from "../../pages/actionBanner";

describe("Shipping page tests without user logged in", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.addItemToCartWithOptions("Blue", "M");
    actionBanner.clickCartBtn();
    actionBanner.clickViewEditCartLink();
    actionBanner.clickProceedToCheckoutBtn();
  });

  it("navigates to the shipping page as guest", () => {});
});
