let pokemonRepository = (function () {
  //List of pokemon Array
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=12'
function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    document.write(pokemon);
  });
}
//adds pokemon to the pokedex
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  let modalContainer = document.querySelector('#modal-container');
  function showModal(pokemon) {
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;
    titleElement.style.textTransform = 'uppercase';
    titleElement.classList.add('modal__title');

    let contentElement = document.createElement('p');
    contentElement.innerText = ('Height: ') + pokemon.height;
    contentElement.classList.add('modal__text');
    let imgElement = document.createElement('img');
    imgElement.src = pokemon.imageUrl
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imgElement)
    pokemon.types.forEach(item => {
        let contentElement = document.createElement('p');
        contentElement.innerText = ('Type: ') + item.type.name;
        contentElement.classList.add('modal__text');
        modal.appendChild(contentElement);
    });
    modalContainer.appendChild(modal);
    modalContainer.classList.add('is-visible');
  }
  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });
  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });
  function getAll() {
    return pokemonList
  }
  function addListItem(pokemon) {
    let listContainer = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button')
    button.innerText = pokemon.name;
    button.classList.add('poke-button');
    listItem.appendChild(button);
    listContainer.appendChild(listItem)
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    })
  }
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }) .then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon)
      });
    }).catch(function (e) {
      console.error(e)
    })
  }
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default,
      item.height = details.height,
      item.types = details.types
    }).catch(function (e) {
      console.error(e);
    });
  }
  function showDetails(item) {
    loadDetails(item).then(function () {
      console.log(item);
      showModal(item);
    });
  }
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails
    }
  })();
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon)
});
});