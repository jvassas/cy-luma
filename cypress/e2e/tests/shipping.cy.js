import actionBanner from "../../pages/actionBanner";
import paymentPage from "../../pages/paymentPage";
import shippingPage from "../../pages/shippingPage";
import utils from "../../support/utils";

describe("Shipping page tests", () => {
  beforeEach(() => {
    cy.fixture("shippingInfo").as("userShippingInfo");
    cy.visit("/");
    cy.addItemToCartWithOptions("Blue", "M");
    actionBanner.clickCartBtn();
    actionBanner.clickViewEditCartLink();
    actionBanner.clickProceedToCheckout();
  });

  it("Should prompt a login when an email address is recognized by the system", function () {
    const existingEmailInfo = {
      email: "test@email.com",
      firstName: "Jacob",
      lastName: "Test",
      street: "1700 Main St",
      city: "Charlotte",
      state: "North Carolina",
      zip: "28206",
      country: "United States",
      phone: "5551234567",
    };
    cy.fillShippingForm(existingEmailInfo);
    shippingPage.assertPwInputIsVisible();
  });

  it("Should allow a user to fill out the required inputs, select the best way shipping rate, and continue", function () {
    cy.get("@userShippingInfo").then((info) => {
      cy.fillShippingForm(info);
    });

    shippingPage.selectShippingMethod("tablerate_bestway");
    shippingPage.clickNextBtn();
    cy.request("https://magento.softwaretestingboard.com/checkout/").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
    cy.url().should("include", "checkout/#payment");
    cy.fixture("shippingInfo").then((info) => {
      paymentPage.verifyBillingDetails(info);
    });
    paymentPage.verifySelectedShippingMethod("Best Way - Table Rate");
  });

  it("Should allow a user to fill out the required inputs, select the flat rate shipping rate, and continue", function () {
    cy.get("@userShippingInfo").then((info) => {
      cy.fillShippingForm(info);
    });

    shippingPage.selectShippingMethod("flatrate_flatrate");
    shippingPage.clickNextBtn();
    cy.request("https://magento.softwaretestingboard.com/checkout/").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
    cy.url().should("include", "checkout/#payment");
    cy.fixture("shippingInfo").then((info) => {
      paymentPage.verifyBillingDetails(info);
    });
    paymentPage.verifySelectedShippingMethod("Flat Rate - Fixed");
  });

  it("Should allow a user to fill out all inputs, select the best way shipping rate, and continue", function () {
    cy.get("@userShippingInfo").then((info) => {
      cy.fillShippingForm(info);
    });

    shippingPage.fillCompanyName("VAE");
    shippingPage.selectShippingMethod("tablerate_bestway");
    shippingPage.clickNextBtn();
    cy.request("https://magento.softwaretestingboard.com/checkout/").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
    cy.url().should("include", "checkout/#payment");
    cy.fixture("shippingInfo").then((info) => {
      paymentPage.verifyBillingDetails(info);
    });
    paymentPage.verifySelectedShippingMethod("Best Way - Table Rate");
  });

  it("Should allow a user to fill out all inputs, select the flat rate shipping rate, and continue", function () {
    cy.get("@userShippingInfo").then((info) => {
      cy.fillShippingForm(info);
    });

    shippingPage.fillCompanyName("VAE");
    shippingPage.selectShippingMethod("flatrate_flatrate");
    shippingPage.clickNextBtn();
    cy.request("https://magento.softwaretestingboard.com/checkout/").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
    cy.url().should("include", "checkout/#payment");
    cy.fixture("shippingInfo").then((info) => {
      paymentPage.verifyBillingDetails(info);
    });
    paymentPage.verifySelectedShippingMethod("Flat Rate - Fixed");
  });

  it("Should throw an error when email is omitted", function () {
    const missingEmailInfo = {
      firstName: "Jacob",
      lastName: "Test",
      street: "1700 Main St",
      city: "Charlotte",
      state: "North Carolina",
      zip: "28206",
      country: "United States",
      phone: "5551234567",
    };
    cy.fillShippingForm(missingEmailInfo);
    shippingPage.selectShippingMethod("flatrate_flatrate");
    shippingPage.clickNextBtn();
    utils.assertFieldIsRequired("customer-email");
  });

  it("Should throw an error when first name is omitted", function () {
    const missingFirstNameInfo = {
      email: "jacobtesting123@email.com",
      lastName: "Test",
      street: "1700 Main St",
      city: "Charlotte",
      state: "North Carolina",
      zip: "28206",
      country: "United States",
      phone: "5551234567",
    };
    cy.fillShippingForm(missingFirstNameInfo);
    shippingPage.selectShippingMethod("flatrate_flatrate");
    shippingPage.clickNextBtn();
    utils.assertClassFieldIsRequired("field");
  });

  it("Should throw an error when last name is omitted", function () {
    const missingLastNameInfo = {
      email: "jacobtesting123@email.com",
      firstName: "Jacob",
      street: "1700 Main St",
      city: "Charlotte",
      state: "North Carolina",
      zip: "28206",
      country: "United States",
      phone: "5551234567",
    };
    cy.fillShippingForm(missingLastNameInfo);
    shippingPage.selectShippingMethod("flatrate_flatrate");
    shippingPage.clickNextBtn();
    utils.assertClassFieldIsRequired("field");
  });

  it("Should throw an error when street address is omitted", function () {
    const missingAddressInfo = {
      email: "jacobtesting123@email.com",
      firstName: "Jacob",
      lastName: "Test",
      city: "Charlotte",
      state: "North Carolina",
      zip: "28206",
      country: "United States",
      phone: "5551234567",
    };
    cy.fillShippingForm(missingAddressInfo);
    shippingPage.selectShippingMethod("flatrate_flatrate");
    shippingPage.clickNextBtn();
    utils.assertClassFieldIsRequired("field");
  });

  it("Should throw an error when city is omitted", function () {
    const missingCityInfo = {
      email: "jacobtesting123@email.com",
      firstName: "Jacob",
      lastName: "Test",
      street: "1700 Main St",
      state: "North Carolina",
      zip: "28206",
      country: "United States",
      phone: "5551234567",
    };
    cy.fillShippingForm(missingCityInfo);
    shippingPage.selectShippingMethod("flatrate_flatrate");
    shippingPage.clickNextBtn();
    utils.assertClassFieldIsRequired("field");
  });

  it("Should throw an error when state is omitted", function () {
    const missingStateInfo = {
      email: "jacobtesting123@email.com",
      firstName: "Jacob",
      lastName: "Test",
      street: "1700 Main St",
      city: "Charlotte",
      zip: "28206",
      country: "United States",
      phone: "5551234567",
    };
    cy.fillShippingForm(missingStateInfo);
    shippingPage.selectShippingMethod("flatrate_flatrate");
    shippingPage.clickNextBtn();
    utils.assertClassFieldIsRequired("field");
  });

  it("Should throw an error when zip is omitted", function () {
    const missingZipInfo = {
      email: "jacobtesting123@email.com",
      firstName: "Jacob",
      lastName: "Test",
      street: "1700 Main St",
      city: "Charlotte",
      state: "North Carolina",
      country: "United States",
      phone: "5551234567",
    };
    cy.fillShippingForm(missingZipInfo);
    shippingPage.selectShippingMethod("flatrate_flatrate");
    shippingPage.clickNextBtn();
    utils.assertClassFieldIsRequired("field");
  });

  it("Should throw an error when phone is omitted", function () {
    const missingPhoneInfo = {
      email: "jacobtesting123@email.com",
      firstName: "Jacob",
      lastName: "Test",
      street: "1700 Main St",
      city: "Charlotte",
      state: "North Carolina",
      zip: "28206",
      country: "United States",
    };
    cy.fillShippingForm(missingPhoneInfo);
    shippingPage.selectShippingMethod("flatrate_flatrate");
    shippingPage.clickNextBtn();
    utils.assertClassFieldIsRequired("field");
  });

  it("Should throw an error if shipping method was not selected", function () {
    cy.get("@userShippingInfo").then((info) => {
      cy.fillShippingForm(info);
    });

    shippingPage.clickNextBtn();
    shippingPage.assertShippingMethodMissingNotice();
  });

  it("Should throw an email formatting error when an invalid email is submitted", function () {
    const missingEmailInfo = {
      email: "test@email",
      firstName: "Jacob",
      lastName: "Test",
      street: "1700 Main St",
      city: "Charlotte",
      state: "North Carolina",
      zip: "28206",
      country: "United States",
      phone: "5551234567",
    };
    cy.fillShippingForm(missingEmailInfo);
    shippingPage.selectShippingMethod("flatrate_flatrate");
    shippingPage.clickNextBtn();
    utils.assertEmailFormatError("customer-email");
  });

  it("Should throw a zip code formatting error when an invalid zip is submitted", function () {
    const missingEmailInfo = {
      email: "test@email.com",
      firstName: "Jacob",
      lastName: "Test",
      street: "1700 Main St",
      city: "Charlotte",
      state: "North Carolina",
      zip: "1111111111",
      country: "United States",
      phone: "5551234567",
    };
    cy.fillShippingForm(missingEmailInfo);
    shippingPage.selectShippingMethod("flatrate_flatrate");
    shippingPage.clickNextBtn();
    shippingPage.assertZipCodeWarning();
  });

  it("Should have all the states and territories in the State dropdown", function () {
    const statesAndTerritories = [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "Armed Forces Africa",
      "Armed Forces Americas",
      "Armed Forces Canada",
      "Armed Forces Europe",
      "Armed Forces Middle East",
      "Armed Forces Pacific",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States Of Micronesia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Marshall Islands",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Palau",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virgin Islands",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ];
    cy.get('select[name="region_id"] option').then((options) => {
      const actualStates = [...options]
        .map((o) => o.text.trim())
        .filter(
          (state) =>
            state && state !== "Please select a region, state or province."
        );
      expect(actualStates).to.have.members(statesAndTerritories);
    });
  });
});
