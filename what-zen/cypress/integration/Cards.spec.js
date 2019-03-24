
describe("newCard", () => {
  it("can type into the body field", () => {
    cy.visit("/");
    cy.get("input[name=title]").type('Test Card{enter}');
    cy.get('#SubmitNewTask').click();
  });

  it("can read the list of cards", () => {
    cy.visit("/");
    cy.get("input[name=title]").type("Test Card{enter}");
    cy.get('#SubmitNewTask').click();
    cy.contains('Test Card');
  });
});
