const typeFormsObject = {
    typeForm: () => {
        cy.get("#firstName").type('Marcos')
        cy.get("#lastName").type('Souto')
        cy.get("#email").type('mv_souto@hotmail.com')
        cy.get('#phone-checkbox').click()
        cy.get("#open-text-area").type('Muito obrigado pelo atendimento, TOP!')
        cy.get('button[type="submit"]').click()
    }
}    
    
module.exports = typeFormsObject