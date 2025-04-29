import { loginLocators } from "../support/locators/loginLocators";
export class LoginPage {
  
  visit() {
    cy.visit("/login");
  }

  enterUsername(username: string) {
    cy.get(loginLocators.usernameInput).type(username);
  }

  enterPassword(password: string) {
    cy.get(loginLocators.passwordInput).type(password);
  }

  clickLogin() {
    cy.get(loginLocators.loginButton).click();
  }

  validate(message: string){
    cy.get(loginLocators.flashMessage).should("be.visible").and("contain.text", message);
  }

  clickLogout(){
    cy.get(loginLocators.logoutButton).click();
  }
  
}