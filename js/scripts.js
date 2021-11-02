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

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('btn-class');
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);
  button.addEventListener('click', function() {
    showDetails(pokemon)
  });
  }//listItem

  function showDetails(pokemon){
    console.log(pokemon);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})();

let pokemon = {name: 'Jargo', height: 90, speed: 40};
(pokemonRepository.add(pokemon));

pokemonRepository.getAll().forEach(function (pokemon){
  pokemonRepository.addListItem(pokemon);
});