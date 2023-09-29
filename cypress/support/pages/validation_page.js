/// <reference types="cypress"/>

export default {

    // Mensagem de erro dos campo de formulario cadastro
    validCampoMessager(message = '') {

        if (message !== '') {
            cy.get('#errorMessageFirstName')
                .should('have.text', message)
        }
    },

    // Mensagem de erro dos campo de formulario sucesso  
    validMessageSucesso(message = '') {

        if (message !== '') {
            cy.get('#swal2-title')
                .should('have.text', message)
        }

    },

    // Mensagem de erro dos campo de formulario login 
    validMessageLogin(message = '') {

        if (message !== '') {
            cy.get('.invalid_input')
                .should('have.text', message)
        }

    },






    


}