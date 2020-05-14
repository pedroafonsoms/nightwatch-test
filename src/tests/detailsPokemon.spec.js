
describe('Details Pokémon', function (browser) {
    
    let pokemon = {
        name: 'Charizard'
    }

    before(function(browser) {
        const searchPage = browser.page.searchPage().navigate()
        searchPage.chooseOne(pokemon.name)
    })

    test('Detail type a specific Pokémon', function(browser) {
        const detailPokemonPage = browser.page.detailsPokemonPage()
        detailPokemonPage.expect.elements('@detailTypes').count.to.equal(2)
    })
})