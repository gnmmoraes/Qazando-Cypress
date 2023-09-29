/// <reference types="cypress"/>

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import home_page from '../pages/home_page'
import login_page from '../pages/login_page'
import validation_page from '../pages/validation_page'

Given("que estou na tela de login", () => {
	home_page.acessandoLoginUsuario()
});

When("preencho email login {string}", (email) => {
	login_page.fillEmail(`${email}`)
});

When("preencho senha login {string}", (senha) => {
	login_page.fillPassword(`${senha}`)
});

When("clico em login", () => {
	login_page.acessandoLogin()
});

Then("valido campo mensagem login {string}", (message) => {
	validation_page.validMessageLogin(`${message}`)
});




