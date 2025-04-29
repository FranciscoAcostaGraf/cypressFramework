import { ChallengePage } from "../pages/ChallengePage";
import { challengeLocators } from "../support/locators/challengeLocators";

describe("Challenge Test", () => {
  const challengePage = new ChallengePage();


  it("should click the blue button", () => {
    challengePage.visit();
    challengePage.clickButton(challengeLocators.blueButton);
    challengePage.clickButton(challengeLocators.redButton);
    challengePage.clickButton(challengeLocators.greenButton);
    

  })
})