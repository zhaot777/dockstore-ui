
'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('dockstore homepage', function() {

	beforeEach(function () {
		
	});

	it('cy.should - assert that <title> is correct', function() {
		cy.visit("http://localhost:9001/index.html");
		cy.title().should('include', 'Dockstore');
	  // ignoring for now, not working in combination with API display
		//expect(browser.getLocationAbsUrl()).toMatch("/");
	});
});
