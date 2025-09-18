describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {   
      cy.visit("./src/index.html")      
  })
 
    it('Valida título da página ok',() => {
      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    } )

    it('preenche os campos obrigatórios e envia o formulário', () => {
      cy.get("#firstName").type('Marcos')
      cy.get("#lastName").type('Souto')
      cy.get("#email").type('mv_souto@hotmail.com')
      cy.get("#open-text-area").type('Muito obrigado pelo atendimento, TOP!')
      cy.get("#phone").type('34992179041')
      cy.get('button[type="submit"]').click()

      cy.get('.success').should('be.visible')
    })



  it('Teste de Delay', () => {
      const longText = Cypress._.repeat('abcdefghijklmnopqrstuvxz', 10)
      cy.get("#open-text-area").type(longText, {delay:0})
      cy.get("#lastName").type('Souto')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () =>{
    cy.get("#email").type('mv_souto,hotmail$#com')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })

  it('Valida campo vazio', () => {
    cy.get("#phone")
      .type('marcos')
      .should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get("#firstName").type('Marcos')
    cy.get("#lastName").type('Souto')
    cy.get("#email").type('mv_souto@hotmail.com')
    cy.get('#phone-checkbox').check()
    cy.get("#open-text-area").type('Muito obrigado pelo atendimento, TOP!')
    cy.contains('button[type="submit"]', 'Enviar').click()
    
    cy.get('.error').should('be.visible')
  })

  it('Preenche e limpa campos', () => {
    cy.get("#firstName")
      .type('Marcos')
      .should('have.value', 'Marcos')
      .clear()
      .should('have.value', '')


    cy.get("#lastName")
      .type('Souto')
      .should('have.value', 'Souto')
      .clear()
      .should('have.value', '')

    cy.get("#email")
      .type('mv_souto@hotmail.com')
      .should('have.value', 'mv_souto@hotmail.com')
      .clear()
      .should('have.value', '')

    cy.get("#open-text-area")
      .type('Muito obrigado pelo atendimento, TOP!')
      .should('have.value', 'Muito obrigado pelo atendimento, TOP!')
      .clear()
      .should('have.value', '')

    cy.get("#phone")
    .type('34992179041')
    .should('have.value', '34992179041')
    .clear()
    .should('have.value', '')

    cy.contains('button[type="submit"]', 'Enviar').click()

    cy.get('.error').should('be.visible')

    })
    

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
      cy.get('button[type="submit"]').click()
    
      cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado', () => {
      cy.fillMandatoryFieldsAndSubmit()  
      
      cy.get('.success').should('be.visible')

    }) 


    it('envia o formuário com sucesso usando um comando customizado', () => {

      const data = {
        firstName: 'Marcos',
        lastName: 'Vinicius Souto',
        email: 'mv_souto@hotmail.com',
        text: 'Teste.'
      }

      cy.fillMandatoryFieldsAndSubmit(data)  
      
      cy.get('.success').should('be.visible')

    })

    const preencheFormulario = require('../pageObjects/typeFormsObject')
    it('Teste com Page Objects', () => {
      preencheFormulario.typeForm()

      cy.contains('Enviar').should('be.visible')   

    })

    
    it('seleciona um produto (YouTube) por seu texto', () => {
      cy.get('#product')
        .select('YouTube')
        .should('have.value', 'youtube')

    })

    it('seleciona um produto (Mentoria) por seu valor (value)', () => {
      cy.get('#product')
        .select('mentoria')
        .should('have.value', 'mentoria')

    })

    it('seleciona um produto (Blog) por seu índice', () => {
      cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
    })

    it('marca o tipo de atendimento "Feedback"', () => {
      cy.get('input[type="radio"],[value="feedback"]').check()
        .should('be.checked', 'feedback')
    })

    it('marca cada tipo de atendimento', () => {
      cy.get('input[type="radio"]')
        .each(typeOfService => {
          cy.wrap(typeOfService)
            .check()
            .should('be.checked')
        })
      })
      
     it('marca ambos checkboxes, depois desmarca o último', () => { 
        cy.get('input[type="checkbox"]')
          .check()
          .should('be.checked')
          .last()
          .uncheck()
          .should('not.be.checked')  

      })

      it('seleciona um arquivo da pasta fixtures', () => {
          cy.get('#file-upload')
          .selectFile('cypress/fixtures/example.json')
          .should(input => {
            expect(input[0].files[0].name).to.equal('example.json')
      })

    })

    it('seleciona um arquivo simulando um drag-and-drop', () => {
          cy.get('#file-upload')
          .selectFile('cypress/fixtures/example.json',{action: 'drag-drop'})
          .should(input => {
            expect(input[0].files[0].name).to.equal('example.json')
      })
    
    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
      cy.fixture('example.json').as('sampleFile')
      cy.get('#file-upload')
          .selectFile('@sampleFile')
          .should(input => {
            expect(input[0].files[0].name).to.equal('example.json')
      })

    })

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
      cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')

    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
        cy.contains('a', 'Política de Privacidade')
         .invoke('removeAttr', 'target')
         .click()

         cy.contains('h1', 'CAC TAT - Política de Privacidade')
          .should('be.visible')
       
    }) 
  

  })



    
