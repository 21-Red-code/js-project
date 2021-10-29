let pokemonRepository = (function(){
  let pokemonList = [
    pokemon1 = {name: 'Geodude', speed: 70, height: 0.4},
    pokemon2 = {name: 'Baltoise', speed: 45, height: 1.6},
    pokemon3 = {name: 'Machoke', speed: 50, height: 1.5}
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon)
  }

  return {
    getAll: getAll,
    add: add
  };
})();

// Lists some pokemons characters & their detail 
pokemonRepository.getAll().forEach(function(pokemonDetail) {
    document.write('Name' + ': ' + pokemonDetail.name + '<br>' + 'speed' + ': ' + pokemonDetail.speed + '<br>' + 'height' + ': ' + pokemonDetail.height + '<br>' + '<br>');
}); 