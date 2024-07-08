describe('Medicamentos Page', () => {
    beforeEach(() => {
      cy.visit('/medicamentos'); // Navegar a la página de medicamentos
    });
  
    it('should display the title', () => {
      cy.get('ion-title').should('have.text', 'Medicamentos');
    });
  
    it('should perform a search and display results', () => {
      // Ajustar selector para buscar dentro del ion-searchbar
      cy.get('ion-searchbar').shadow().find('input').type('Aspirina');
      cy.get('ion-button').contains('Buscar').click();
  
      cy.get('.medicamento-item').should('have.length.greaterThan', 0); // Verifica que hay resultados
    });
  
    it('should display an empty message when no results', () => {
      // Ajustar selector para buscar dentro del ion-searchbar
      cy.get('ion-searchbar').shadow().find('input').type('MedicamentoInexistente');
      cy.get('ion-button').contains('Buscar').click();
  
      cy.get('.medicamento-item').should('have.length', 0); // Verifica que no hay resultados
      cy.get('.empty-message').should('have.text', 'No se encontraron medicamentos.');
    });
  });
  