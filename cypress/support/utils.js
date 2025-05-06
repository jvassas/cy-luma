class Utils {
  getFieldError(fieldId) {
    return cy.get(`#${fieldId}-error`);
  }
  assertFieldIsRequired(fieldId) {
    this.getFieldError(fieldId)
      .should("be.visible")
      .and("have.text", "This is a required field.");
  }

  assertEmailFormatError(fieldId) {
    this.getFieldError(fieldId)
      .should("be.visible")
      .and(
        "have.text",
        "Please enter a valid email address (Ex: johndoe@domain.com)."
      );
  }

  getClassFieldError(fieldClass) {
    return cy.get(`.${fieldClass}-error`);
  }
  assertClassFieldIsRequired(fieldClass) {
    this.getClassFieldError(fieldClass)
      .should("be.visible")
      .and(
        "have.text",
        "\n                This is a required field.\n            "
      );
  }
}

export default new Utils();
