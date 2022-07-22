///<reference types="cypress" /> 



context("Validar requisicao com sucesso", () =>{

    it('Validar resposta da requisicao com sucesso' , () => {
        cy.request('https://api.trello.com/1/actions/592f11060f95a3d3d46a987a').then(resposta=>{
            expect(resposta.status).equal(200)
            expect(resposta.body.data.list.name).equal("Professional")
        } )

    })

})