Feature: Api ServeRest

    Deve ser realizado as validações na Api ServeRest

@loginSucesso
Scenario: Validar fluxo de Login realizando Login com sucesso
When enviar uma requisição com credenciais de login validas na Api de login
Then terei o status code 200 com o Token de Autenticacao gerado com sucesso

@buscaUserInvalido
Scenario: Validar a busca de um usuario com id invalido
When enviar uma requisição com id invalido na Api de busca de usuarios
Then terei o status code 400 com a mensagem de usuario não encontrado

@cadastroInvalido
Scenario: Validar um cadastro com email existente
When enviar uma requisição com email ja cadastrado na Api de criacao de usuarios
Then terei o status code 400 com a mensagem de este email ja esta sendo usado