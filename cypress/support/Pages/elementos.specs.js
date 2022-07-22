//Elementos de interação com a página//

class Acoes {

    AcessarSite(){
        cy.visit('https://www.shoestock.com.br/')
    }

    PreencherBusca(){
        cy.fixture('massa').as('dados')
        cy.get('@dados').then(dado=> 
            cy.get('#search-input').type(dado.busca))
    }

    //O site apresentou constantemente erros de Cros, incluí esse comando para ignorar o erro e prosseguir com o teste//
    IgnorarErroCros(){
    Cypress.on('uncaught:exception', (err, runnable) => { return false })
    }

    //Inseri esse "wait" por que o site estava atualizando antes de incluir o texto no campo de busca//
    EsperarLoad(){
    cy.wait(3000)
    }
    ClicarBotaoBuscar(){
        cy.get('.input-label > .button').dblclick()
    }
    ValidarElementos(){
        cy.get('@dados').then(dado=>{
            cy.get('.cart__items > .cart__title').should('contain', dado.carrinho)
            cy.get('.name').should('contain', dado.produto)
            cy.get('[qa-auto="cart-price"]').should('contain', dado.preco)
        })
    }
    EscolherProduto(){
    cy.get('[href="//www.shoestock.com.br/tenis-couro-shoestock-basic-feminino-branco+caramelo-O01-5009-299"] > .item-card > .item-card__images > .item-card__images__image-link > .loaded').click()
    }
    ValidarProdutoEscolhido(){
    cy.fixture('massa').as('dados')
    cy.get('@dados').then(dado=> cy.get('.short-description h1').should('contain', dado.produto))
    }
    SelecionarTamanho(){
    cy.get(':nth-child(2) > .product-item').click()
    }
    ClicarBotaoComprar(){
    cy.get('#buy-button-now').click({force: true})
    }
}

export default new Acoes();