Feature: Cadastro cliente
            Eu como cliente
    Quero realizar meu cadastro
    Para ter acesso a plataforma e-commerce

    Scenario: Cadastro com sucesso


        Given que estou na tela de cadastro
        When preencho nome cadastro "Gabriel"
        And preencho email cadastro "teste@teste.com"
        And preencho senha cadastro "pwd123"
        And clico cadastro
        Then valido mensagem com sucesso "Cadastro realizado!"

    
    Scenario Outline: Cadastro de cliente <cenario>

        Given que estou na tela de cadastro
        When preencho nome cadastro "<nome>"
        And preencho email cadastro "<email>"
        And preencho senha cadastro "<password>"
        And clico cadastro
        Then valido campo de mensagem "<check_mensagem>"


            Examples:
            | cenario          | nome    | email           | password | check_mensagem                                 |
            | nome em branco   |         | teste@teste.com | pwd123   | O campo nome deve ser prenchido                |
            | email em branco  | Gabriel |                 | pwd123   | O campo e-mail deve ser prenchido corretamente |
            | email incorreto  | Gabriel | teste#teste.com | pwd123   | O campo e-mail deve ser prenchido corretamente |
            | senha em branco  | Gabriel | teste@teste.com |          | O campo senha deve ter pelo menos 6 dígitos    |
            | senha incorreta  | Gabriel | teste@teste.com | pwd      | O campo senha deve ter pelo menos 6 dígitos    |
           

