/// <reference types="cypress"/>

import cadastro_usuario_page from "./cadastro_usuario_page"
//import validation_page from "./validation_page"

export default {

    acessandoLogin() {
        cy.contains('button', 'login')
            .click()

    },

    preencherLogin(email, password) {
        cadastro_usuario_page.preencherNome(email)
        cadastro_usuario_page.preencherPassword(password)
        this.acessandoLogin()
    }, 

    fillEmail(email) {
        cadastro_usuario_page.preencherNome(email)
       
    }, 

    fillPassword(password) {
        cadastro_usuario_page.preencherPassword(password)
    }
}