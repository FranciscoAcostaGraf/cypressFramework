export class AlertsPage {
  
  visit() {
    cy.visit("/javascript_alerts");
  }

  jsAlert(){
    cy.get(':nth-child(1) > button').click();
    cy.get('#result').should("be.visible").and("contain.text", "You successfully clicked an alert");
  }

  jsAlertConf(){
    cy.get(':nth-child(2) > button').click();
    cy.get('#result').should("be.visible").and("contain.text", "You clicked: Ok");
  }

  jsAlertPrompt(){
    cy.get(':nth-child(3) > button').click();
    cy.get('#result').should("be.visible").and("contain.text", "You clicked: Ok");
  }

}