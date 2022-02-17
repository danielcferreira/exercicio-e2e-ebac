/// <reference types="cypress" />



context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO 
        // acesso ao login
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
          
        //compra 1 
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3111 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Yellow').click()
        cy.get('.single_add_to_cart_button').click()

        //compra 2
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(3) > a').click()
        cy.get('.post-3073 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.single_add_to_cart_button').click()
        
        //compra 3 
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
        cy.get('.post-3964 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.single_add_to_cart_button').click()
       
        //compra 4 
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(4) > a').click()
        cy.get('.post-3850 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.single_add_to_cart_button').click()
         
        //checkout do produto 
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#terms').click()
        
       
        cy.get('.woocommerce-billing-fields > h3').should('contain', 'Detalhes de faturamento')
       
    });


   

   

   
})