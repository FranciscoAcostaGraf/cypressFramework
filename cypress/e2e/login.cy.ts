import { LoginPage } from "../pages/LoginPage";

describe("Login Test", () => {
  const loginPage = new LoginPage();

  it("should log in successfully", () => {
    loginPage.visit();
    loginPage.enterUsername("tomsmith");
    loginPage.enterPassword("SuperSecretPassword!");
    loginPage.clickLogin();
    loginPage.clickLogout();
  });
});