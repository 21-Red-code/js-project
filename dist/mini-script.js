let pokemonRepository=function(){let e=[],t="https://pokeapi.co/api/v2/pokemon/?limit=72 Q",n=document.querySelector("#searchbar");function o(t){"object"==typeof t?e.push(t):document.write("not a pokemon")}function i(e){let t=e.detailsUrl;return fetch(t).then(function(e){return e.json()}).then(function(t){e.imageUrl=t.sprites.other.dream_world.front_default,e.height=t.height,e.types=t.types,e.weight=t.weight}).catch(function(e){console.error(e)})}return n.addEventListener("input",function(){let e=document.querySelectorAll("li"),t=n.value.toUpperCase();e.forEach(function(e){e.innerText.toUpperCase().indexOf(t)<0?e.style.display="none":e.style.display=""})}),{add:o,getAll:function(){return e},addListItem:function(e){let t=document.querySelector(".pokemon-list"),n=document.createElement("li"),o=document.createElement("button");o.addEventListener("click",function(){!function(e){i(e).then(function(){!function(e){let t=document.querySelector(".modal-title"),n=document.querySelector(".modal-body"),o=e.types.map(function(e){return e.type.name});t.innerHTML="",n.innerHTML="";let i=document.createElement("h5");i.innerHTML=e.name;let r=document.createElement("p");r.innerHTML="Height: "+e.height;let c=document.createElement("p");c.innerHTML="Type: "+o;let l=document.createElement("p");l.innerHTML="Weight: "+e.weight;let a=document.createElement("img");a.src=e.imageUrl,t.append(i),n.append(a),n.append(r),n.append(l),n.append(c)}(e),console.log(e)})}(e)}),o.innerText=e.name,o.classList.add("btn","btn-success","pokeEachbtn"),o.setAttribute("data-toggle","modal"),o.setAttribute("data-target","#pokeModal"),n.classList.add("list-group-item"),n.appendChild(o),t.appendChild(n)},loadList:function(){return fetch(t).then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){o({name:e.name,detailsUrl:e.url})})}).catch(function(e){console.error(e)})},loadDetails:i}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});