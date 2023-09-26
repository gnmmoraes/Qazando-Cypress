/// <reference types="cypress"/>

export default {

    acessandoCadastroUsuario() {

        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock')
            .click()

        cy.get('#user')
            .should('be.visible')

    },

    acessandoLoginUsuario() {

        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-user')
            .click()

        cy.get('#btnLogin')
            .should('be.visible')

    }

}

