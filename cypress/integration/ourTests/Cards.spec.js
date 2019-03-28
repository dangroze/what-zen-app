
describe("newCard", () => {

  beforeEach(() => {
    cy.login()
    cy.visit("blank.html");
    cy.visit("/home")
  })

// Due to some issues with long-polling (used by Firebase) and using a
// single-page application with Cypress (#761), these tests use a blank.html
// page after each test to clear out any lingering XHR requests.
  afterEach(function() {
    cy.visit("blank.html");
  });

  it("can type into the body field", () => {
    cy.get('#plus').click()
    cy.get("input[name=title]").type('Test Card{enter}');
  });

  it("can read a new of cards", () => {
    cy.contains('Test Card');
  });

  it("can click on details", () => {
    cy.get('#plus').click()
    cy.get("input[name=title]").type('Test Card{enter}');
    cy.get(".field").find('button').contains('...').click({force: true})
  });

  it("can write details and comments", () => {
    cy.get('#plus').click()
    cy.get("input[name=title]").type('Test Card{enter}');
    cy.visit("/home")
    cy.get(".field").find('button').contains('...').first().click({force: true})
    cy.get("textarea[name=details]").click({force: true}).type('These are details test')
    cy.get("textarea[name=comments]").click({force: true}).type('This are comments test')
    cy.contains('These are details test');
    cy.contains('This are comments test');
    cy.get("button[name=saveChanges]").click({force: true})
    cy.visit("/home")
    cy.get(".field").find('button').contains('...').first().click({force: true})
    cy.get("textarea[name=details]").contains('These are details test');
    cy.contains('This are comments test');
    });

  it("can delete the card", () => {
    cy.get('#plus').click()
    cy.get("input[name=urgent]").click()
    cy.get("input[name=title]").type('Test Card to be deleted');
    cy.get("#Create").click()
    cy.contains('Test Card to be deleted');
    cy.get(".field").find('button').contains('x').click({force: true})
    cy.get(".YesButton").click({force: true})
    cy.get('Test Card to be deleted').should('not.exist');
  });

  it("can check the card", () => {
    cy.get('#plus').click()
    cy.get("input[name=title]").type('Test Card to be checked{enter}');
    cy.contains('Test Card to be checked')
    cy.get('input[name=important]').first().check({force: true}).should('be.checked')
    cy.get('input[name=urgent]').first().check({force: true}).should('be.checked')
    cy.get('input[name=important]').first().uncheck({force: true}).should('not.be.checked')
    cy.get('input[name=urgent]').first().uncheck({force: true}).should('not.be.checked')
    cy.contains('Test Card to be checked')
  });



});
