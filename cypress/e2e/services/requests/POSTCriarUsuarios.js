/// <reference types="Cypress" />
const payloadUser = require('../payloads/cadastroUser.json')

function postCadastroUser(){
    return cy.request ({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        failOnStatusCode: false,
        headers:{
            'accept':'application/json'
        },
        body: payloadUser
    })
}

export {postCadastroUser}