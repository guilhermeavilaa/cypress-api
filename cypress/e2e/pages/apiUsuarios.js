import * as GETUsuarios from '../services/requests/GETBuscaUsuarios'
import * as POSTUsuarios from '../services/requests/POSTCriarUsuarios'

class usuarios{

    buscarIdInvalido(){
        GETUsuarios.getUser('Teste123').should((respUsers) => {
            expect(respUsers.body).to.be.not.null
            expect(respUsers.status).to.eq(400)
            expect(respUsers.body.message).to.eq('Usuário não encontrado')
        })
    }

    criacaoUserInvalido(){
        POSTUsuarios.postCadastroUser().should((respCreate) => {
            expect(respCreate.body).to.be.not.null
            expect(respCreate.status).to.eq(400)
            expect(respCreate.body.message).to.eq('Este email já está sendo usado')
        })
    }
}
export default new usuarios()
