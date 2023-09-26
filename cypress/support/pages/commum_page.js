/// <reference types="cypress"/>

export default {

    acessandoCadastroUsuario() {

        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock')
            .click()

        cy.get('#user')
            .should('be.visible')

    }

}

