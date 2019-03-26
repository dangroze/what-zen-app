describe("Chat", () => {

  beforeEach(() => {
    cy.login()
  })

// Due to some issues with long-polling (used by Firebase) and using a
// single-page application with Cypress (#761), these tests use a blank.html
// page after each test to clear out any lingering XHR requests.
  afterEach(function() {
    cy.visit("blank.html");
  });

  it("can display a new message", () => {
    const testmessage = "TDD: Test" + Date.now()
    cy.get("input[name=message]").type(testmessage);
    cy.get('.messageForm').submit()
    cy.contains(testmessage);
  });
});
