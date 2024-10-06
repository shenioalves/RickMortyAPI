const url = 'https://rickandmortyapi.com/api/character'; // URL da API

fetch(url)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('container'); // Pega a div para renderização
        const results = data.results; // Obtem o array de resultados da API
        // Percorre o array results
        
        for (let i = 0; i < results.length; i++) {
            const character = results[i];
            
            const div = document.createElement('div');// cria elemneto div
            div.classList.add('character');

            const name = document.createElement('h2'); // cria elemento nome
            name.textContent = character.name; // add o nome do personagem
            div.appendChild(name); // add o nome na div

            const image = document.createElement('img'); // cria elemento de imagem
            image.src = character.image; // atributo 'src' da imagem
            div.appendChild(image); // add a imagem na div
         
            const species = document.createElement('p'); // cria elemento de especie
            species.textContent = character.species; // add a especie do personagem

            div.appendChild(species); // add a espécie na div

            // add div criada acima no container
            container.appendChild(div);
        }
    })
    .catch(error => console.error('Erro:', error));