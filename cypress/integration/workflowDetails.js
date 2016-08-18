
describe('Dockstore Workflow Details', function() {

	beforeEach(function () {
     cy.visit("http://localhost:9000/workflows/DockstoreTestUser/hello-dockstore-workflow")
  })

	it('should not show Edit Button', function() {
    // edit button should only appear inside "My Workflows"
    // unless logged in as the author, edit button should not be present in "Workflows"
    cy
      .get("#editButton")
        .should("exist")
        .should("not.be.visible")
  })
})
