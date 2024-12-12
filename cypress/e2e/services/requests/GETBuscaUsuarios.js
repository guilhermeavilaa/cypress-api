/// <reference types="Cypress" />

function getUser(id){
    return cy.request ({
        method: 'GET',
        url: 'https://serverest.dev/usuarios/' + id,
        failOnStatusCode: false,
        headers:{
            'accept':'application/json'
        }
    })
}

export {getUser}