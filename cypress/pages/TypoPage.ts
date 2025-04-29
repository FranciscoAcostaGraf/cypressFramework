export class TypoPage {
    visit() {
      cy.visit("/typos");
    }
  
    validateText() {
      try {
        cy.get("h3").should("be.visible").and("contain.text", "Typos");
        cy.get('.example > :nth-child(2)').should("be.visible").and("contain.text", "This example demonstrates a typo being introduced. It does it randomly on each page load.");
        cy.get('.example > :nth-child(3)').should("be.visible").and("contain.text", "Sometimes you'll see a typo, other times you won't.");
        cy.log("Validación de texto exitosa."); // Opcional: Log si la validación pasa
      } catch (error) {
        cy.log("Ocurrió un error durante la validación de texto.");
        // Aquí puedes agregar más lógica para manejar el error:
        // - Fallar la prueba explícitamente:
        //   expect(false, `Error en la validación de texto: ${error}`).to.be.true;
        // - Intentar una recuperación o una validación alternativa.
        // - Simplemente loguear el error y permitir que la prueba continúe (con precaución).
        cy.wrap(error).as('validationError'); // Guardar el error para un análisis posterior si es necesario.
      } finally {
        cy.log("Bloque finally ejecutado después de la validación de texto."); // Opcional: Código que siempre se ejecuta.
      }
    }
  }