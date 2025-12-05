
const url = `https://rickandmortyapi.com/api/character`; // URL da API que iremos buscar os personagens

fetch(url) // Faz a requisição HTTP para a API usando fetch
    .then(response => response.json()) // Converte a resposta da API para JSON
    .then(data => { // Recebe os dados já convertidos
        const container = document.getElementById('container'); // Seleciona a div onde os personagens serão exibidos
        const results = data.results; // Pega o array de personagens retornado pela API
        
        for (let i = 0; i < results.length; i++) { // Loop que percorre cada personagem
            const character = results[i]; // Pega o personagem da vez no loop
            
            const div = document.createElement('div'); // Cria uma div para colocar os dados do personagem
            div.classList.add('character');
                      
            const name = document.createElement('h2'); // Cria um elemento <h2> para o nome
            name.textContent = character.name; // Define o texto do <h2> como o nome do personagem
            div.appendChild(name); // Adiciona o nome dentro da div
            div.addEventListener('click', () => {
                openModal(character);
            });
            
            const image = document.createElement('img'); // Cria um elemento <img>
            image.src = character.image; // Define o atributo src da imagem
            div.appendChild(image); // Adiciona a imagem dentro da div
            
            const species = document.createElement('p'); // Cria um <p> para a espécie
            species.textContent = character.species; // Define o texto como a espécie do personagem
            div.appendChild(species); // Adiciona o <p> dentro da div
            
            container.appendChild(div); // Coloca a div completa dentro do container principal
        }
    })
    .catch(error => console.error('Erro:', error)); // Caso aconteça algum erro na requisição, mostra no console

function openModal(character) {
    // Pega os elementos do modal
    const modal = document.getElementById('modal');
    const modalName = document.getElementById('modalName');
    const modalImage = document.getElementById('modalImage');
    const modalSpecies = document.getElementById('modalSpecies');
    const modalStatus = document.getElementById('modalStatus');
    const modalGender = document.getElementById('modalGender');

    // Preenche as infos
    modalName.textContent = character.name;
    modalImage.src = character.image;
    modalOrigin.textContent = "Origin: " + character.origin.name;
    modalSpecies.textContent = "Species: " + character.species;
    modalStatus.textContent = "Status: " + character.status;
    modalGender.textContent = "Gender: " + character.gender;

    // Mostra o modal
    modal.style.display = 'flex';
}

// Fechar modal
document.getElementById('closeModal').onclick = () => {
    document.getElementById('modal').style.display = 'none';
};

// Fechar clicando fora
window.onclick = (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

