/// <reference = cypress>

describe("Testes de criação, login e pa no buggy cars rating", ()=>{

    it("criar conta com sucesso",()=>{
        criarUser()
        
    })

    it("criar conta com falha",()=>{
        cy.visit('https://buggy.justtestit.org')
        cy.get('.btn-success-outline').click()
        cy.get('#username').type("auauau")
        cy.get('#firstName').type("issovaidarerrado")
        cy.get('#lastName').type("oops")
        cy.get('.btn-default').should("be.disabled")
        
    })

    it("login com sucesso",()=>{
        let info = criarUser()
        cy.login(info[0],info[1])
        cy.wait(1000)
        cy.get(':nth-child(1) > .nav-link').should("contain.text","Hi, "+info[0])
    })

    it("login com falha",()=>{
        let info = criarUser()
        cy.get('.input-sm').type(info[0])
        cy.get('.form-inline > .form-group > [name="password"]').type("HAHASAAAAH")
        cy.get('.btn-success').click()
        cy.get('.label').should("contain.text","Invalid username/password")
        
    })

    it("deixar um comentario",()=>{
        let info = criarUser()
        cy.login(info[0],info[1])
        cy.get(':nth-child(2) > .card').click()
        cy.wait(4000)
        cy.get('#comment').type("muito foda parabens 10/10")
        cy.get('.btn').click()
    })

    it("logout",()=>{
        let info = criarUser()
        cy.login(info[0],info[1])
        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(4000)
        cy.get('.btn-success').should("contain.text","Login")

    })


    
})
function criarUser(){
    let hora=new Date().getHours().toString()
    let minuto = new Date().getMinutes().toString()
    let seg = new Date().getSeconds().toString()
    let id = hora+minuto+seg+ "id"
    let senha = hora+minuto+seg+"senha"
    senha = senha+"A#"
    let info = [id,senha]

    cy.visit('https://buggy.justtestit.org')
    cy.get('.btn-success-outline').click()
    cy.get('#username').type(id)
    cy.get('#firstName').type(id)
    cy.get('#lastName').type(id)
    cy.get('#password').type(senha)
    cy.get('#confirmPassword').type(senha)
    cy.get('.btn-default').click()
    cy.get('.result').should("contain.text","Registration is successful")
    
    

    return info
}