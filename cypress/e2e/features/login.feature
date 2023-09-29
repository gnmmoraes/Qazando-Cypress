Feature: Login
            Eu como cliente
    Quero fazer login na aplicação
    Para realizar pedido de compra

    Scenario: Login com sucesso

        Given que estou na tela de login
        When preencho email login "teste@teste.com"
            And preencho senha login "pwd123"
            And clico em login
        Then  valido mensagem com sucesso "Login realizado"

    
    Scenario Outline: Login com "<cenario_login>"
        Given que estou na tela de login
        When preencho email login "<login_email>"
            And preencho senha login "<login_password>"
            And clico em login
        Then  valido campo mensagem login "<check_mensagem>"


            Examples:
            | cenario_login    | login_email     | login_password | check_mensagem   |
            | e-mail vazio     |                 | pwd123         | E-mail inválido. |
            | e-mail incorreto | teste#teste.com | pwd123         | E-mail inválido. |
            | senha vazio      | teste@teste.com |                | Senha inválida.  |
            | senha incorreto  | teste@teste.com | pwd            | Senha inválida.  |



