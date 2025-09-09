const apiUrl ="https://rickandmortyapi.com/api/character";

function makeCard(character) {
    const cardsContainer = document.querySelector(".cards-container");

    const title = document.createElement("h5");
    title.textContent = character.name;
    const characterStatus = document.createElement("p");
    characterStatus.textContent = character.status;

    if (character.status === "Alive") {
    characterStatus.style.color = "green";
    } else {
    characterStatus.style.color = "red";
    };

    const characterImage = document.createElement("img");
    characterImage.src = character.image;
    characterImage.width = 200;

    const Card = document.createElement("div");
    Card.appendChild(title);
    Card.appendChild(characterImage);
    Card.appendChild(characterStatus);
    Card.style.backgroundColor = "blue";

    cardsContainer.appendChild(Card);
}

async function getCharacters () {

    try {
    const response = await fetch(apiUrl);
    const { results } = await response.json();
for(let i=0; i<results.length; i++) {
    makeCard(results[i]);
}

    console.log(result);
}
    catch(error) {
        console.error(error);
    }
}

getCharacters();