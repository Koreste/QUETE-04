describe('Uploader',()=>{
    const imagePath = 'Bordeaux.jpg';

    it.skip('Quête 4 Cypress',()=>{
        cy.visit('https://filebin.net/') 
        cy.get('#fileField').attachFile(imagePath);
        cy.get('[sorttable_customkey="Bordeaux.jpg"]').should('be.visible').and('contains.text',imagePath)
        cy.get(':nth-child(8) > .link-primary').should('be.visible')
        cy.contains("Tar")
      .invoke("attr", "href")
      .then((downloadLink) => {
        const absulteLink = "https://filebin.net/" + downloadLink ;
        cy.log(downloadLink);
        cy.downloadFile(
          absulteLink,
          "mydownloads/tarFiles",
          "downloadedFromCypress.tar")
          cy.readFile("mydownloads/tarFiles/downloadedFromCypress.tar");

        })
    })
    it('Quête 4 Cypress',()=>{
        cy.visit('https://filebin.net/') 
        cy.get('#fileField').attachFile(imagePath);
        cy.get('[sorttable_customkey="Bordeaux.jpg"]').should('be.visible').and('contains.text',imagePath)
        cy.get(':nth-child(8) > .link-primary').should('be.visible')
        cy.contains("Zip")
      .invoke("attr", "href")
      .then((downloadLink) => {
        const absulteLink = "https://filebin.net/" + downloadLink ;
        cy.log(downloadLink);
        cy.downloadFile(
          absulteLink,
          "mydownloads/ZipFiles",
          "downloadedFromCypress.zip")
          cy.readFile("mydownloads/ZipFiles/downloadedFromCypress.zip");

})
    })
})
