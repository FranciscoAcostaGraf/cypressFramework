
export class ChallengePage {
    visit() {
        cy.visit("/challenging_dom");
    }

    clickButton(button: string){
        cy.intercept("GET", "/challenging_dom*").as("clickRequest");
        cy.get(button).first().click();
        cy.wait("@clickRequest").its("response.statusCode").should("eq", 200);

    }
}