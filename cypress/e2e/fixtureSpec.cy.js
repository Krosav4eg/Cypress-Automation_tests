import name from '../fixtures/example.json'

const PATH_TO_THE_FIXTURE = 'example';
const PATH_TO_THE_FIXTURE2 = 'tests/my.json';

const webAddresses = {
    google: "https://www.google.com/",
    cypress_doc: "https://example.cypress.io",
}

describe('checking fixtures functionality', () => {
    before('set fixture as an Object precondition', function () {
        cy.fixture(PATH_TO_THE_FIXTURE).then((example) => {
            this.example = example
        })
    })

    it('using fixture as an object', function () {
        cy.visit(webAddresses.cypress_doc)
        cy.get('.navbar-brand').should('have.text', this.example.query);
    })

    it('get data from nested fixture', () => {
        cy.visit(webAddresses.google)
        cy.fixture(PATH_TO_THE_FIXTURE2).then((data) => {
            cy.get('.SDkEP').type(data.name_special_for_fixture).type('{enter}')
        })
    })

    it('loads the same object in fixture', () => {
        cy.fixture(PATH_TO_THE_FIXTURE).then((userFixture) => {
            expect(name, 'the same data').to.deep.equal(userFixture)
        })
    })
})