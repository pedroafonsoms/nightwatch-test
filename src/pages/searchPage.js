
const actions = {
    searchFor: function(name) {
        return this.setValue('@searchField', name)
    },

    chooseOne: function(name) {
        return this.searchFor(name).click('@resultList')
    }
}

module.exports = {
    url: 'https://pokedex.org/',
    
    commands: [actions],

    elements: {
        searchField: '#monsters-search-bar',
        resultList: '#monsters-list > li'
    }
}