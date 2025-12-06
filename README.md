# 📘 Aula: Consumo de API com JavaScript

**Curso Tomorrow — Módulo de JavaScript**
> **Tema:** Requisição GET e Renderização de Dados na Página

Nesta aula, desenvolvemos juntos um projeto simples utilizando a **Rick and Morty API** para aprender como consumir dados externos com JavaScript e exibir essas informações no HTML.

---

## 🎯 Objetivo da Aula

O objetivo foi ensinar aos alunos:

- Como fazer uma requisição GET usando `fetch()`
- Como converter a resposta para JSON
- Como acessar e manipular os dados retornados pela API
- Como criar elementos HTML dinamicamente
- Como renderizar informações na tela (foto, nome e espécie)

---

## 🌐 API Utilizada

Usamos a **Rick and Morty API**:
👉 [Documentação Oficial](https://rickandmortyapi.com/documentation/#rest)

**Endpoint utilizado:**
`https://rickandmortyapi.com/api/character`

---

## 🛠️ O que foi desenvolvido

Durante a aula, montamos uma página HTML simples que:

- [x] Faz uma requisição GET
- [x] Recebe um array de personagens
- [x] Renderiza na tela:
  - Foto
  - Nome
  - Espécie

Os alunos aprenderam a criar cards dinamicamente com JavaScript usando `document.createElement()` e `appendChild()`.

---

## 📄 Estrutura do Código

### HTML Básico

```html
<div id="container"></div>

const url = '[https://rickandmortyapi.com/api/character](https://rickandmortyapi.com/api/character)';

fetch(url)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('container');
        const results = data.results;

        results.forEach(character => {
            const div = document.createElement('div');
            div.classList.add('character');

            const name = document.createElement('h2');
            name.textContent = character.name;
            div.appendChild(name);

            const image = document.createElement('img');
            image.src = character.image;
            div.appendChild(image);

            const species = document.createElement('p');
            species.textContent = character.species;
            div.appendChild(species);

            container.appendChild(div);
        });
    })
    .catch(error => console.error('Erro:', error));
```

## 📚 Conceitos Abordados
Fetch API

Promises (then, catch)

Manipulação do DOM

Criação dinâmica de elementos

Estrutura de dados de uma API REST

Como ler documentação de APIs
