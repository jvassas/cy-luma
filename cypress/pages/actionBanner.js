const cartIcon_Class = ".showcart";
const viewEditCartLink_Text = "View and Edit Cart";

class ActionBanner {
  clickCartBtn() {
    cy.get(cartIcon_Class).should("be.visible").click();
  }

  clickViewEditCartLink() {
    cy.contains(viewEditCartLink_Text).should("be.visible").click();
  }

  clickProceedToCheckout() {
    cy.get('button[data-role="proceed-to-checkout"]')
      .should("be.visible")
      .click();
  }
}

export default new ActionBanner();
