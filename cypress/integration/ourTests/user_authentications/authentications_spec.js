describe('Authentications', () => {

  beforeEach(() => {
    cy.login()
  })

// Due to some issues with long-polling (used by Firebase) and using a
// single-page application with Cypress (#761), these tests use a blank.html
// page after each test to clear out any lingering XHR requests.
  afterEach(function() {
    cy.visit("blank.html");
  });

  it('can log in', () => {
    cy.contains('Logged in as:').should('exist')
  })

  it('can log out', () => {
    cy.contains('Sign Out').click()
    cy.contains('Sign In').should('exist')
  })

  it('can sign up', () => {
    const newTestUsername = 'test' + Date.now()
    const newTestEmail = Date.now() + 'test@test.com'

    cy.contains('Sign Out').click()
    cy.visit("blank.html");
    cy.visit('/signup')
    cy.get('#usernameInput').type(newTestUsername)
    cy.get('#emailInput').type(newTestEmail)
    cy.get('#passwordInput').type(newTestUsername)
    cy.get('#passwordConfirmation').type(newTestUsername + '{enter}')
    cy.contains('Logged in as: ' + newTestEmail).should('exist')
  })
})
