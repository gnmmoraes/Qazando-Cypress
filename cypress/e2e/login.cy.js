/// <reference types="cypress"/>

import commum_page from '../support/pages/commum_page'
import login_page from '../support/pages/login_page'
import validation_page from '../support/pages/validation_page' 

const userDataValid  = require ('../fixtures/cadastro_user_data_valid.json') 
const userDataInvalid  = require ('../fixtures/cadastro_user_data_invalid.json') 


describe('Login', () => {

    beforeEach('Acessando pagina login', () => {
        commum_page.acessandoLoginUsuario()
    })

    it('Login email em branco', () => {
        login_page.preencherLogin('', userDataValid.password)
        validation_page.validMessageLogin('E-mail inválido.')
    })

    it('Login email incorreto', () => {
        login_page.preencherLogin(userDataInvalid.email, userDataValid.password)
        validation_page.validMessageLogin('E-mail inválido.')
    })

    it('Login senha em branco', () => {
        login_page.preencherLogin(userDataValid.email, '')
        validation_page.validMessageLogin('Senha inválida.')
    })

    it('Login senha incorreta', () => {
        login_page.preencherLogin(userDataValid.email, userDataInvalid.password)
        validation_page.validMessageLogin('Senha inválida.')
    })

    it('Login com sucesso', () => {
        login_page.preencherLogin(userDataValid.email, userDataValid.password)
        validation_page.validCadastroSucesso('Login realizado')
    })

})