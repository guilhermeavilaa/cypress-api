import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import users from '../pages/apiUsuarios'
import login from '../pages/apiLogin'

//@loginSucesso

When("enviar uma requisição com credenciais de login validas na Api de login", () => {
    login.loginUser()
  })

Then("terei o status code 200 com o Token de Autenticacao gerado com sucesso", () => {
    login.loginUser()
  })

//@buscaUserInvalido

When("enviar uma requisição com id invalido na Api de busca de usuarios", () => {
    users.buscarIdInvalido()
  })

Then("terei o status code 400 com a mensagem de usuario não encontrado", () => {
    users.buscarIdInvalido()
})

//@cadastroInvalido

When("enviar uma requisição com email ja cadastrado na Api de criacao de usuarios", () => {
    users.criacaoUserInvalido()
})

Then("terei o status code 400 com a mensagem de este email ja esta sendo usado", () => {
    users.criacaoUserInvalido()
})