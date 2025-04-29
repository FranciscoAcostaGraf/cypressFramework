import { LoginPage } from "../pages/LoginPage";
import { loginLocators } from "../support/locators/loginLocators";

describe("Login Test", () => {
  const loginPage = new LoginPage();

  it("should log in successfully", () => {
    loginPage.visit();
    loginPage.enterUsername("tomsmith");
    loginPage.enterPassword("SuperSecretPassword!");
    loginPage.clickLogin();
    loginPage.validate(loginLocators.succesfulLogin);
    loginPage.clickLogout();
    loginPage.validate(loginLocators.succesfulLogout);
  });

  it("should fail log in, incorrect username, correct pasword",() => {
    loginPage.visit();
    loginPage.enterUsername("ChinoPuto");
    loginPage.enterPassword("SuperSecretPassword!")
    loginPage.clickLogin();
    loginPage.validate(loginLocators.invalidUsername);
  })
  
  it("should fail log in, correct username, incorrect pasword",() => {
    loginPage.visit();
    loginPage.enterUsername("tomsmith");
    loginPage.enterPassword("AnalKing69")
    loginPage.clickLogin();
    loginPage.validate(loginLocators.invalidPassword);
  })

});