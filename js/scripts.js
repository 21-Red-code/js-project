let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=72 Q';
  let searchInput = document.querySelector('#searchbar');

  // This code checks if pokemon is an object.
  function add(pokemon) {
    if (typeof pokemon === 'object') {
      pokemonList.push(pokemon);
    } else {
      document.write('not a pokemon')
    };
  }
  function getAll() {
    return pokemonList;
  };

  // This code creates list and button for the pokemonList
  function addListItem(pokemon) {
    let pokeList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
    button.innerText = pokemon.name;
    button.classList.add('btn', 'btn-success', 'pokeEachbtn');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokeModal');
    listItem.classList.add('list-group-item');
    listItem.appendChild(button);
    pokeList.appendChild(listItem);
  };

  // This code displays info about pokemons in modal.
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon)
      console.log(pokemon);
    });
  }

  // This code will fetch data from json
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  };

  // This code fetches detail's about pokemons like: img, height, type, weight
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.other.dream_world.front_default;
      item.height = details.height;
      item.types = details.types;
      item.weight = details.weight;
    }).catch(function (e) {
      console.error(e);
    });
  };

  // Pokemon Modal
  function showModal(pokemon) {
    let modalTitle = document.querySelector('.modal-title');
    let modalBody = document.querySelector('.modal-body');
    let theMap = pokemon.types;
    let map = theMap.map(function(x){
      return x.type.name;
    });
    
    modalTitle.innerHTML = '';
    modalBody.innerHTML = '';
    let title = document.createElement('h5');
    title.innerHTML = pokemon.name;
    let pokeHeight = document.createElement('p');
    pokeHeight.innerHTML = 'Height: ' + pokemon.height;
    let pokeTypes = document.createElement('p');
    pokeTypes.innerHTML = 'Type: ' + map;
    let pokeWeight = document.createElement('p');
    pokeWeight.innerHTML = 'Weight: ' + pokemon.weight;
    let pokePic = document.createElement('img');
    pokePic.src = pokemon.imageUrl;
    modalTitle.append(title);
    modalBody.append(pokePic);
    modalBody.append(pokeHeight);
    modalBody.append(pokeWeight);
    modalBody.append(pokeTypes);
  }

  //search bar
    searchInput.addEventListener("input", function() {
      let listPokemon = document.querySelectorAll("li");
      let value = searchInput.value.toUpperCase();
      listPokemon.forEach(function(pokemon) {
        if (pokemon.innerText.toUpperCase().indexOf(value) < 0) {
          pokemon.style.display = "none";
        } else {
          pokemon.style.display = "";
        }        
      });
    });
        return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});