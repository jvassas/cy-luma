class PaymentPage {
  verifyBillingDetails(info) {
    cy.get(".billing-address-details").within(() => {
      cy.contains(info.firstName).should("exist");
      cy.contains(info.lastName).should("exist");
      cy.contains(info.street).should("exist");
      cy.contains(info.city).should("exist");
      cy.contains(info.state).should("exist");
      cy.contains(info.zip).should("exist");
      cy.contains(info.country).should("exist");
      cy.contains(info.phone).should("exist");
    });
  }

  verifySelectedShippingMethod = (expectedLabel) => {
    cy.get(".shipping-information-content .value")
      .should("be.visible")
      .and("contain.text", expectedLabel);
  };
}

export default new PaymentPage();
