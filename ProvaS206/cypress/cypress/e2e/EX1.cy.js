/// <reference = cypress>

describe("testes",()=>{

    it("teste de sign up correto",()=>{
        signUp()
    })

    it("teste de sign up errado", ()=>{
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#signin2').click()
        cy.get('#sign-username').type("bide sanches")

        //caputra o alerta
        cy.on('window:alert', (alertText) => {
        // Verifica a mensagem do alerta
        expect(alertText).to.equal('Please fill out Username and Password.')
        })

        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        
    })

    it("teste de login correto",()=>{
        let info = signUp()
        cy.get('#login2').click()
        cy.get('#loginusername').type(info[0])
        cy.wait(1000)
        cy.get('#loginpassword').type(info[1])
        cy.wait(1000)

        //caputra o alerta
        cy.on('window:alert', (alertText) => {
        // Verifica a mensagem do alerta
        expect(alertText).to.equal('Sign up successful.')
        })
    
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })

    it("teste de login errado",()=>{
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.get('#loginusername').type("bife sanchez")

       
        //caputra o alerta
        cy.on('window:alert', (alertText) => {
        // Verifica a mensagem do alerta
        expect(alertText).to.equal('Please fill out Username and Password.')
        })
    
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })

    it("teste de cart errado",()=>{
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#cartur').click()
        cy.get('.col-lg-1 > .btn').click()

        //caputra o alerta
        cy.on('window:alert', (alertText) => {
            // Verifica a mensagem do alerta
            expect(alertText).to.equal('Please fill out Name and Creditcard.')
            })

        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    })

    it("teste de cart certo",()=>{
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#cartur').click()
        cy.get('.col-lg-1 > .btn').click()
        cy.get('#name').type("a")
        cy.wait(1000)
        cy.get('#card').type("a")   
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.sweet-alert > h2').should("contain.text","Thank you for your purchase!")
        cy.get('.confirm').click()

    })


})

function signUp(){
    let hora=new Date().getHours().toString()
    let minuto = new Date().getMinutes().toString()
    let seg = new Date().getSeconds().toString()
    let user = hora+minuto+seg+ "user"
    let senha = hora+minuto+seg+"senha"
    let info = [user,senha]

    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#signin2').click()
    cy.get('#sign-username').type(user)
    cy.wait(1000)
    cy.get('#sign-password').type(senha)
    cy.wait(1000)

    //caputra o alerta
    cy.on('window:alert', (alertText) => {
        // Verifica a mensagem do alerta
        expect(alertText).to.equal('Sign up successful.');
      })

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
    return info
}