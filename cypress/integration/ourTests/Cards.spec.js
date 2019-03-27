
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

  it("can read a new of cards", () => {
    cy.contains('Test Card');
  });

  it("can click on details", () => {
    cy.get("input[name=title]").type('Test Card{enter}');
    cy.get(".field").find('button').contains('...').click()
  });

  it("can write details and comments", () => {
    cy.get("input[name=title]").type('Test Card{enter}');
    cy.get(".field").find('button').contains('...').first().click()
    cy.get("textarea[name=details]").click().type('These are details test')
    cy.get("textarea[name=comments]").click().type('This are comments test')
    cy.contains('These are details test');
    cy.contains('This are comments test');
    cy.get("button[name=saveChanges]").click()
    cy.get("div[name=mainSection]").click()
    cy.get(".field").find('button').contains('...').first().click()
    cy.contains('These are details test');
    cy.contains('This are comments test');
    });

  it("can delete the card", () => {
    cy.get("input[name=title]").type('Test Card to be deleted{enter}');
    cy.contains('Test Card to be deleted');
    cy.get(".field").find('button').contains('x').click()
    cy.get('Test Card to be deleted').should('not.exist');
  });

  it("can check the card", () => {
    cy.get("input[name=title]").type('Test Card to be checked{enter}');
    cy.contains('Test Card to be checked')
    cy.get('input[name=important]').first().check().should('be.checked') 
    cy.get('input[name=urgent]').first().check().should('be.checked') 
    cy.get('input[name=important]').first().uncheck().should('not.be.checked') 
    cy.get('input[name=urgent]').first().uncheck().should('not.be.checked') 
    cy.contains('Test Card to be checked')
  });



});
