let pokemonList = [
    pokemon1 = {name: 'Geodude', speed: 70, height: 0.4},
    pokemon2 = {name: 'Baltoise', speed: 45, height: 1.6},
    pokemon3 = {name: 'Machoke', speed: 50, height: 1.5}
];

// Lists some pokemons characters & their detail 
pokemonList.forEach(function(pokemonDetail) {
    document.write('Name' + ': ' + pokemonDetail.name + '<br>' + 'speed' + ': ' + pokemonDetail.speed + '<br>' + 'height' + ': ' + pokemonDetail.height + '<br>' + '<br>');
}); 