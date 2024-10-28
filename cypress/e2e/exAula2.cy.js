/// <reference = cypress>

describe("Testes de criação, registro e login", ()=>{
    it.skip("Teste criação de usuario com sucesso", ()=>{
        criarUser()        
    })

    it.skip("Teste de criação de ususario com falha",()=>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('.btn-link').click()
        cy.get('#firstName').type("luiz")
        cy.get('#Text1').type("luiz")
        cy.get('#username').type("luiz")
        cy.get('.btn-primary').should("be.disabled")
        
    })

    it.skip("Teste de login com sucesso",()=>{
        let info = criarUser()
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('#username').type(info[0])
        cy.get('#password').type(info[1])
        cy.get('.btn-primary').click()
        cy.get('h1.ng-binding').should("contain.text","Hi "+info[0]+"!")


    })

    it("Teste de deletar",()=>{
      let info = criarUser()
      cy.login(info[0],info[1])
      cy.get(':nth-child(1) > a').click()
      cy.get('.btn').click()
      cy.login(info[0],info[1])
      cy.get('.ng-binding').should("contain.text","Username or password is incorrect")


    })

    })

    function criarUser(){
        let hora=new Date().getHours().toString()
        let minuto = new Date().getMinutes().toString()
        let seg = new Date().getSeconds().toString()
        let id = hora+minuto+seg+ "id"
        let senha = hora+minuto+seg+"senha"
        let info = [id,senha]

        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('.btn-link').click()
        cy.get('#firstName').type(id)
        cy.get('#Text1').type(id)
        cy.get('#username').type(id)
        cy.get('#password').type(senha)
        cy.get('.btn-primary').click()
        cy.get('.ng-binding').should("contain.text","Registration successful")

        return info
    }
