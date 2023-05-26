import name from '../fixtures/example.json'

const PATH_TO_THE_FIXTURE = 'example';

const webAddresses = {
    google: "https://www.google.com/",
    cypress_doc: "https://example.cypress.io",
}

describe('checking my own json fixtures functionality', () => {
    before('set fixture as an Object precondition', function () {
        cy.fixture(PATH_TO_THE_FIXTURE).then((example) => {
            this.example = example
        })
    })

    it('using fixture as an object 2', function () {
        cy.visit(webAddresses.cypress_doc)
        cy.get('.navbar-brand').should('have.text', this.example.query);
    })

    it('loads the same object in fixture 2', () => {
        cy.fixture(PATH_TO_THE_FIXTURE).then((userFixture) => {
            expect(name, 'the same data').to.deep.equal(userFixture)
        })
    })
})