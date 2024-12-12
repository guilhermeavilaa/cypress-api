/// <reference types="Cypress" />
const payloadLogin = require('../payloads/login.json')

function postLogin(){
    return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        failOnStatusCode: false,
        headers:{
            'accept':'application/json'
        },
        body: payloadLogin
    })
}

export {postLogin}