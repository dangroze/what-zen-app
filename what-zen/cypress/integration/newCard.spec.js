describe("newCard", () => {
  it("can type into the body field", () => {
    cy.visit("http://localhost:3000");
    cy.get("input[name=body]").type("Test Card");
    cy.get('#create-button').click();
  });
});
