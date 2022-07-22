///<reference types="cypress" /> 

import Acoes from '../support/Pages/elementos.specs'

context("selecionar produto com sucesso", () =>{

    it('Devera incluir um produto com sucesso no carrinho' , () => {

// Os elementos estão organizados na pasta "Pages" dentro do arquivo "Elementos.specs.js"//
//Utilizei a estrutura de organização "Page Obejects" para deixar o código mais limpo e de fácil entendimento das ações//

        Acoes.AcessarSite()
        Acoes.IgnorarErroCros()
        Acoes.EsperarLoad()
        Acoes.PreencherBusca()
        Acoes.ClicarBotaoBuscar()
        Acoes.EscolherProduto()
        Acoes.ValidarProdutoEscolhido()
        Acoes.SelecionarTamanho()
        Acoes.ClicarBotaoComprar()
        Acoes.ValidarElementos()       
    })

})