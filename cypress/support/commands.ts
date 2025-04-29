
  Cypress.Commands.add("login", (username: string, password: string) => {
    cy.visit("/login");
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("button[type='submit']").click();

  // VALIDACIÓN: que el mensaje de #flash aparezca
    cy.get("#flash")
      .should("be.visible")
      .and("contain.text", "You logged"); // podés ajustar a "You logged into the secure area!" o "out"
  });

  Cypress.Commands.add("verifyUrlContains", (text: string) => {
    cy.url().should("include", text);
  });
  
  Cypress.Commands.add("getByTestId", (testId: string) => {
    return cy.get(`[data-testid="${testId}"]`);
  });
  
  Cypress.Commands.add("scrollToElement", (selector: string) => {
    cy.get(selector).scrollIntoView();
  });
  
  Cypress.Commands.add("clickElement", (selector: string) => {
    cy.get(selector).click({ force: true });
  });
  