/// <reference types="cypress"/>

export default {

    validCampoMessager(message = '') {

        if (message !== '') {
            cy.get('#errorMessageFirstName')
                .should('have.text', message)
        }
    },

    validCadastroSucesso(message = '') {

        if (message !== '') {
            cy.get('#swal2-title')
                .should('have.text', message)
        }

    },

    validMessageLogin(message = '') {

        if (message !== '') {
            cy.get('.invalid_input')
                .should('have.text', message)
        }

    },






    


}