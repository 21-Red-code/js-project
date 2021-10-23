let pokemonList = [
    pokemon2 = {name: 'Geodude', speed: 70, height: 0.4},
    pokemon1 = {name: 'Baltoise', speed: 45, height: 1.6},
    pokemon3 = {name: 'Machoke', speed: 50, height: 1.5}
];

// Lists some pokemons characters & their height and shows which one is taller
for (let i = 0; i < pokemonList.length; i++){
  if (pokemonList[i].height > 1.5){document.write(pokemonList[i].name  + '-------' + 'height' + ' ', pokemonList[i].height + '.' + ' '+ 'Wow that\'s big!'+ '<br>');}

  else {document.write(pokemonList[i].name  + '------' + 'height' + ' ', pokemonList[i].height + '.' +  '<br>');}
}