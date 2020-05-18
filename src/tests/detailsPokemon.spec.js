describe('Details Pokémon', function (browser) {
    
    let pokemon = {
        name: 'Charizard'
    }

    before((browser) => {
        const searchPage = browser.page.searchPage().navigate()
        searchPage.chooseOne(pokemon.name)
    })

    test('Detail type a specific Pokémon', (browser) => {
        const detailPokemonPage = browser.page.detailsPokemonPage()
        detailPokemonPage.expect.elements('@detailTypes').count.to.equal(2)
    })
})