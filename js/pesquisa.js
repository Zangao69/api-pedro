// Sua chave de API
const minhaChaveAPI = 'WPQlIQi8oP2nR0vD5Mqk';

// URL base da API
const urlBaseAPI = 'https://the-one-api.dev/v2';

// Função para fazer uma solicitação para a API
function requisitarAPI(endpoint) {
    // Realiza uma solicitação para o endpoint da API usando a função fetch
    fetch(urlBaseAPI + endpoint, {
        headers: {
            'Authorization': 'Bearer ' + minhaChaveAPI
        }
    })
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            // Manipula os dados recebidos da API
            console.log(data); // Exibe os dados no console
            exibirResultado(data); // Chama a função para exibir o resultado
        })
        .catch(error => {
            console.error('Erro ao acessar a API:', error);
        });
}

// Função para exibir o resultado
function exibirResultado(data) {
    // Limpa o conteúdo anterior
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    // Verifica se há dados
    if (data && data.docs && data.docs.length > 0) {
        // Cria uma lista para exibir os resultados
        const lista = document.createElement('ul');

        // Para cada item na resposta da API, adiciona um elemento à lista
        data.docs.forEach(item => {
            const itemElement = document.createElement('li');
            // Adiciona um evento de clique para exibir as informações detalhadas
            itemElement.addEventListener('click', function() {
                exibirDetalhes(item);
            });
            itemElement.textContent = item.name; // Supondo que o nome do item é relevante para a pesquisa
            lista.appendChild(itemElement);
        });

        // Adiciona a lista ao elemento de resultado
        resultadoElement.appendChild(lista);
    } else {
        // Exibe uma mensagem se não houver resultados
        resultadoElement.textContent = 'Nenhum resultado encontrado.';
    }
}

// Função para exibir os detalhes do personagem, filme ou livro
// Função para exibir os detalhes do personagem, filme ou livro
function exibirDetalhes(item) {
    // Limpa o conteúdo anterior
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    // Cria um elemento de lista para cada detalhe
    const detalhesList = document.createElement('ul');
    for (const prop in item) {
        if (item.hasOwnProperty(prop)) {
            const detalheItem = document.createElement('li');
            detalheItem.textContent = `${prop}: ${item[prop]}`;
            detalhesList.appendChild(detalheItem);
        }
    }

    // Adiciona os detalhes ao elemento de resultado
    resultadoElement.appendChild(detalhesList);
}

// Função para exibir informações detalhadas do personagem
function exibirDetalhesPersonagem(personagem) {
    // Limpa o conteúdo anterior
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    // Cria um contêiner para as informações do personagem
    const container = document.createElement('div');
    container.classList.add('personagem-info'); // Adiciona uma classe para estilização

    // Adiciona as informações do personagem
    const nome = document.createElement('p');
    nome.textContent = 'Nome: ' + personagem.name;
    container.appendChild(nome);

    const raca = document.createElement('p');
    raca.textContent = 'Raça: ' + personagem.race;
    container.appendChild(raca);

    const genero = document.createElement('p');
    genero.textContent = 'Gênero: ' + personagem.gender;
    container.appendChild(genero);

    const nascimento = document.createElement('p');
    nascimento.textContent = 'Nascimento: ' + personagem.birth;
    container.appendChild(nascimento);

    const morte = document.createElement('p');
    morte.textContent = 'Morte: ' + personagem.death;
    container.appendChild(morte);

    // Adiciona o contêiner ao elemento de resultado
    resultadoElement.appendChild(container);
}
// Função para exibir os nomes dos personagens em uma lista
function exibirNomesPersonagens(personagens) {
    const listaPersonagens = document.getElementById('lista-personagens');

    // Limpa a lista anterior
    listaPersonagens.innerHTML = '';

    // Adiciona os nomes dos personagens à lista
    personagens.forEach(personagem => {
        const listItem = document.createElement('li');
        listItem.textContent = personagem.name;
        listItem.addEventListener('click', () => {
            exibirDetalhesPersonagem(personagem);
        });
        listaPersonagens.appendChild(listItem);
    });
}

// Função para pesquisar
function pesquisar() {
    const termo = document.getElementById('searchInput').value.trim(); // Obtém o termo de pesquisa
    if (termo !== '') {
        const endpointSelecionado = document.getElementById('select').value; // Obtém o endpoint selecionado
        const endpointPesquisa = endpointSelecionado + '?name=' + termo; // Monta o endpoint de pesquisa
        requisitarAPI(endpointPesquisa); // Chama a função para fazer a solicitação à API
    }
}

// Event listener para cada link da barra de navegação
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão de seguir o link
        const endpoint = link.getAttribute('href'); // Obtém o endpoint do atributo href do link
        requisitarAPI(endpoint); // Chama a função para fazer a solicitação à API
    });
});

// Chama a função para fazer a solicitação ao primeiro endpoint quando a página carregar
requisitarAPI('/book'); // Endpoint padrão
