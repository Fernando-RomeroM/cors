function searchCharacter() {
    const name = document.getElementById('searchInput').value;
    fetch(`http://localhost:3000/characters/${name}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Character not found');
            }
            return response.json();
        })
        .then(data => {
            displayCharacterInfo(data);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('characterInfo').innerHTML = `<p>${error.message}</p>`;
        });
}

function displayCharacterInfo(character) {
    const characterInfo = `
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="${character.name}">
        <p>Status: ${character.status}</p>
        <p>Species: ${character.species}</p>
        <p>Gender: ${character.gender}</p>
        <p>Origin: ${character.origin.name}</p>
    `;
    document.getElementById('characterInfo').innerHTML = characterInfo;
}
