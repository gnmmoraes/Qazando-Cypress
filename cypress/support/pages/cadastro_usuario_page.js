/// <reference types="cypress"/>

export default {

    salvarCadastro() {

        cy.contains('button', 'Cadastrar')
            .click()
    },

    preencherNome(name = "") {
       
       if (name !== "" )  {
            cy.get('#user')
               .should('be.visible')
                .type(name)
       }
    },

    preencherEmail(email = '') {

        if (email !== '') {
            cy.get('#email')
                .should('be.visible')
                .type(email)
        }
    },

    preencherPassword(password = '') {

        if (password !== '') {
            cy.get('#password')
                .should('be.visible')
                .type(password)
        }
    },

    // preencherCadastro(nome, email, password) {
    //     this.preencherNome(nome)
    //     this.preencherEmail(email)
    //     this.preencherPassword(password)
    //     this.salvarCadastro()
    // },


}