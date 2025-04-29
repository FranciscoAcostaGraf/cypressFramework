import { TypoPage } from "../pages/TypoPage";

describe("Typo Test", () => {
  const typoPage = new TypoPage();

  it("should log in successfully", () => { 
    typoPage.visit();
    typoPage.validateText();
  })

})