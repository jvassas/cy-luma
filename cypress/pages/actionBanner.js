const cartIcon_Class = ".showcart";
const viewEditCartLink_Text = "View and Edit Cart";
const proceedToCheckoutBtn_Text = "Proceed to Checkout";

class ActionBanner {
  clickCartBtn() {
    cy.get(cartIcon_Class).click();
  }

  clickViewEditCartLink() {
    cy.contains(viewEditCartLink_Text).click();
  }

  clickProceedToCheckoutBtn() {
    cy.contains(proceedToCheckoutBtn_Text).click();
  }
}

export default new ActionBanner();
