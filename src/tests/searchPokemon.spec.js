
/* describe('Details Pokémon', function () {

    before((browser) => {
        const searchPage = browser.page.searchpage()
    })

    test('Search for a specific Pokémon', (browser) => {
        searchPage.navigate()
            .setValue('@searchField', 'charizard')
            .expect.elements('@listResult').count.to.equal(1) 
    })

    test('Search for a group Pokémon', (browser) => {
        searchPage.navigate()
            .setValue('@searchField', 'char')
            .expect.elements('@listResult').count.to.equal(3)
    })

})
 */
module.exports = {

    beforeEach: (browser) => {
        searchPage = browser.page.searchPage().navigate()
    },

    'Search for a specific Pokémon': () => {
        searchPage
            .searchFor('charizard')
            .expect.elements('@resultList').count.to.equal(1) 
    },

    'Search for a group Pokémon': () => {
        searchPage
            .searchFor('char')
            .expect.elements('@resultList').count.to.equal(3)
    }
}
