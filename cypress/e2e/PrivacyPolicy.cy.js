describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {   
      cy.visit("src/privacy.html")      
  })    
  
  it('testa a página da política de privacidade de forma independente', () => {
  cy.contains('h1', 'CAC TAT - Política de Privacidade')
    .should('be.visible')

  })

})