import { Then } from 'cypress-cucumber-preprocessor/steps'
import * as POSTLogin from '../services/requests/POSTLoginAuth'

class login{
    
    loginUser(){
        POSTLogin.postLogin().should((respUser) => {
            expect(respUser.body).to.be.not.null
            expect(respUser.status).to.eq(200)
            expect(respUser.body.message).to.eq('Login realizado com sucesso')
        })
    }

}
export default new login()