Cypress.Commands.add(
  "addItemToCartWithOptions",
  (color = "Blue", size = "M") => {
    // Click the first product
    cy.get(".product-item").first().click();

    // Select color
    cy.get(`.swatch-option.color[aria-label="${color}"]`).click();

    // Select size
    cy.get(`.swatch-option.text[aria-label="${size}"]`).click();

    // Click Add to Cart
    cy.get("#product-addtocart-button").click();

    // Confirm it was added
    cy.get(".message-success", { timeout: 5000 }).should(
      "contain",
      "You added"
    );
  }
);
