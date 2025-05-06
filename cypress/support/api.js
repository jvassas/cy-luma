export const MagentoAPI = {
  addToCart(productId, formKey, uenc) {
    return cy.getCookies().then((cookies) => {
      const cookieHeader = cookies
        .map((c) => `${c.name}=${c.value}`)
        .join("; ");

      return cy.request({
        method: "POST",
        url: `https://magento.softwaretestingboard.com/checkout/cart/add/uenc/${uenc}/product/${productId}/`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Cookie: cookieHeader,
          Origin: "https://magento.softwaretestingboard.com",
          Referer:
            "https://magento.softwaretestingboard.com/abominable-hoodie.html",
        },
        form: true,
        body: {
          product: productId,
          form_key: formKey,
        },
      });
    });
  },

  getCart() {
    return cy.getCookies().then((cookies) => {
      const cookieHeader = cookies
        .map((c) => `${c.name}=${c.value}`)
        .join("; ");

      return cy.request({
        method: "GET",
        url: "https://magento.softwaretestingboard.com/checkout/cart/",
        headers: {
          Cookie: cookieHeader,
        },
      });
    });
  },
};
