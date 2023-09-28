/// <reference types="cypress"/>

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import home_page from '../pages/home_page'
import login_page from '../pages/login_page'
import validation_page from '../pages/validation_page'

Given("que estou na tela de login", () => {
	home_page.acessandoLoginUsuario()
});

When(/^preencho campo e-mail "([^"]*)"$/, (email) => {
	//cadastro_usuario_page.preencherNome(email)
	login_page.fillEmail(email)
});

When(/^preencho campo senha "([^"]*)"$/, (password) => {
	//cadastro_usuario_page.preencherPassword(password)
	login_page.fillPassword(password)
});

When(/^clico em login$/, () => {
	login_page.acessandoLogin()
});

Then(/^Eu vejo a mensagem sucesso "([^"]*)"$/, (message) => {
	validation_page.validCadastroSucesso(message)
});




