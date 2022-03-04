describe('drag to upload test', () => {
  it('test', { baseUrl: null }, () => {
    cy.visit("index.html")
    cy.get('#file',).selectFile("image.png", {
      action: 'drag-drop'
    })
  })
})