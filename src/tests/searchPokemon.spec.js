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
