/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
      login(username: string, password: string): Chainable<void>;
      verifyUrlContains(text: string): Chainable<void>;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
      scrollToElement(selector: string): Chainable<void>;
      clickElement(selector: string): Chainable<void>;
    }
  }
  