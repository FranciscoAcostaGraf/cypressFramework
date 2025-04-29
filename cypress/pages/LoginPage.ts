export class LoginPage {
  visit() {
    cy.visit("/login");
  }

  enterUsername(username: string) {
    cy.get("#username").type(username);
  }

  enterPassword(password: string) {
    cy.get("#password").type(password);
  }

  clickLogin() {
    cy.get("button[type='submit']").click();
  }

  clickLogout(){
    cy.get('.button').click();
  }
}