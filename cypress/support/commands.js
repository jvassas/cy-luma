Cypress.Commands.add(
  "addItemToCartWithOptions",
  (color = "Blue", size = "M") => {
    cy.get(".product-item").first().click();
    cy.get(`.swatch-option.color[aria-label="${color}"]`).click();
    cy.get(`.swatch-option.text[aria-label="${size}"]`).click();
    cy.get("#product-addtocart-button").click();
    cy.get(".message-success", { timeout: 5000 }).should(
      "contain",
      "You added"
    );
  }
);

Cypress.Commands.add("fillShippingForm", (info) => {
  if (info.firstName) {
    cy.get('input[name="firstname"]', { timeout: 15000 })
      .should("exist")
      .and("be.visible")
      .type(info.firstName);
  }

  if (info.lastName) {
    cy.get('input[name="lastname"]', { timeout: 10000 })
      .should("exist")
      .and("be.visible")
      .type(info.lastName);
  }

  if (info.street) {
    cy.get('input[name="street[0]"]', { timeout: 10000 })
      .should("exist")
      .and("be.visible")
      .type(info.street);
  }

  if (info.city) {
    cy.get('input[name="city"]', { timeout: 10000 })
      .should("exist")
      .and("be.visible")
      .type(info.city);
  }

  if (info.state) {
    cy.get('select[name="region_id"]', { timeout: 10000 })
      .should("exist")
      .and("be.visible")
      .select(info.state);
  }

  if (info.zip) {
    cy.get('input[name="postcode"]', { timeout: 10000 })
      .should("exist")
      .and("be.visible")
      .type(info.zip);
  }

  if (info.country) {
    cy.get('select[name="country_id"]', { timeout: 10000 })
      .should("exist")
      .and("be.visible")
      .select(info.country);
  }

  if (info.phone) {
    cy.get('input[name="telephone"]', { timeout: 10000 })
      .should("exist")
      .and("be.visible")
      .type(info.phone);
  }

  if (info.email) {
    cy.get("#customer-email", { timeout: 10000 })
      .should("exist")
      .and("be.visible")
      .type(info.email);
  }
});
