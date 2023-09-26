/// <reference types="cypress"/>

import commumPage from "../support/pages/commum_page"
import cadastroPage from "../support/pages/cadastro_usuario_page"
import validationPage from "../support/pages/validation_page"

const userDataValid = require('../fixtures/cadastro_user_data_valid.json')
const userDataInvalid = require('../fixtures/cadastro_user_data_invalid.json')

describe('Cadastro de usuário', () => {

    beforeEach('Acessando cadastro usuário', () => {
        commumPage.acessandoCadastroUsuario()
    })

    it('Usuario em branco', () => {
        cadastroPage.preencherCadastro('',userDataValid.email, userDataValid.password)
        validationPage.validCampoMessager('O campo nome deve ser prenchido')
    })

    it('Email em branco', () => {
        cadastroPage.preencherCadastro(userDataValid.name, '', userDataValid.password)
        validationPage.validCampoMessager('O campo e-mail deve ser prenchido corretamente')
    })

    it('Email sem @', () => {
        cadastroPage.preencherCadastro(userDataValid.name, userDataInvalid.email, userDataValid.password)
        validationPage.validCampoMessager('O campo e-mail deve ser prenchido corretamente')
    })

    it('Senha em branco', () => {
        cadastroPage.preencherCadastro(userDataValid.name, userDataValid.email, '')
        validationPage.validCampoMessager('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Senha menor que 6 caracteres', () => {
        cadastroPage.preencherCadastro(userDataValid.name, userDataValid.email, userDataInvalid.password)
        validationPage.validCampoMessager('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com Sucesso', () => {
        cadastroPage.preencherCadastro(userDataValid.name, userDataValid.email, userDataValid.password)
        validationPage.validCadastroSucesso('Cadastro realizado!')
    })


})