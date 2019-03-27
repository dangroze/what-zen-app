
describe("newCard", () => {

  beforeEach(() => {
    cy.login()
  })

// Due to some issues with long-polling (used by Firebase) and using a
// single-page application with Cypress (#761), these tests use a blank.html
// page after each test to clear out any lingering XHR requests.
  afterEach(function() {
    cy.visit("blank.html");
  });

  it("can type into the body field", () => {
    cy.get("input[name=title]").type('Test Card{enter}');
  });

  it("can read the list of cards", () => {
    cy.contains('Test Card');
  });

});
