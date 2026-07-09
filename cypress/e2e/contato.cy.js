describe('Funcionalidade: Contato', () => {

 beforeEach(() => {
  cy.visit('http://localhost:3000/index.html')
 });

  //Comando only para rodar apenas esse teste
  it('Deve preencher formulário de contato com sucesso', () => {
    // Aqui vai implementado o primeiro teste
    cy.visit('http://localhost:3000/index.html')
    cy.get('[name="name"]').type('Alex Rocha')
    cy.get('[name="email"]').type('alex.rocha@teste.com') 
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist')
  })
  it('Deve Validar mensagem de erro ao enviar sem preencher nome', () => {
    //cy.visit('http://localhost:3000/index.html')
    cy.get('[name="name"]').clear() 
    cy.get('[name="email"]').type('alex.rocha@teste.com') 
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')
  });
  it('Deve Validar mensagem de erro ao enviar sem preencher email', () => {
    //cy.visit('http://localhost:3000/index.html')
    cy.get('[name="name"]').type('Alex Rocha')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')
  });
  it('Deve Validar mensagem de erro ao enviar sem selecionar o assunto', () => {
    //cy.visit('http://localhost:3000/index.html')
    cy.get('[name="name"]').type('Alex Rocha')
    cy.get('[name="email"]').type('alex.rocha@teste.com')
    //cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')
  });
  it('Deve Validar mensagem de erro ao enviar sem preencher a mensagem', () => {
    //cy.visit('http://localhost:3000/index.html')
    cy.get('[name="name"]').type('Alex Rocha')
    cy.get('[name="email"]').type('alex.rocha@teste.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem')
  });
});