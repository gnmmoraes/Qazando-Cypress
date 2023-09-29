///<reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

import home_page from '../pages/home_page'
import cadastro_usuario_page from '../pages/cadastro_usuario_page';
import validation_page from '../pages/validation_page'

Given("que estou na tela de cadastro", () => {
	home_page.acessandoCadastroUsuario()
});

When("preencho nome cadastro {string}", (nome) => {
	cadastro_usuario_page.preencherNome(`${nome}`)
});

When("preencho email cadastro {string}", (email) => {
	cadastro_usuario_page.preencherEmail(`${email}`)
});

When("preencho senha cadastro {string}", (senha) => {
	cadastro_usuario_page.preencherPassword(`${senha}`)
});

When('clico cadastro', () => {
	cadastro_usuario_page.salvarCadastro()
});

Then("valido campo de mensagem {string}", (mensagem) => {
	validation_page.validCampoMessager(`${mensagem}`)
});

Then("valido mensagem com sucesso {string}", (cadastro) => {
	validation_page.validMessageSucesso()
});