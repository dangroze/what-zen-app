import firebase from 'firebase';

describe("newCard", () => {
  it("can type into the body field", () => {
    cy.visit("/");
    cy.get("input[name=body]").type("Test Card");
    cy.get('#create-button').click();
  });

  it("can read javascript", () => {
    const testtable = firebase.database().ref('/testtable2')
    const newKey = testtable.child('victoria').set({
      age: '300',
      shit: 'good'
    }).key
    const app = firebase.database().ref('/testtable2/')
    app.on('value', snapshot => {
      const something = snapshot.val()
        console.log(snapshot.val().victoria.age)
        console.log(snapshot.val().victoria)
      })
  });
});
