// Create Helper functions here (i.e. generateEmail, getDate, etc)

//Create common function for 'This is a required field'

class Utils {
  getFieldError(fieldId) {
    return cy.get(`#${fieldId}-error`);
  }
  assertFieldIsRequired(fieldId) {
    this.getFieldError(fieldId)
      .should("be.visible")
      .and("have.text", "This is a required field.");
  }
}

export default new Utils();
