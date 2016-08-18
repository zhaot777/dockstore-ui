
describe('Dockstore Workflow Details', function() {

	beforeEach(function () {

  })

	it('should not show Edit Button', function() {
    cy.visit("http://localhost:9001/workflows/DockstoreTestUser/hello-dockstore-workflow")
    // edit button should only appear inside "My Workflows"
    // unless logged in as the author, edit button should not be present in "Workflows"
    cy
      .get("#editButton")
        .should("exist")
        .should("not.be.visible")
  })
})
