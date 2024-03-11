class Pet {
    constructor(nome, especie, idade) {
      this.nome = nome;
      this.especie = especie;
      this.idade = idade;
    }
  }

  let pets = []; // Array para armazenar os pets

  // Função para cadastrar um novo pet
  function cadastrarPet() {
    var nomePet = document.getElementById('nomePet').value;
    var especie = document.getElementById('especie').value;
    var idade = document.getElementById('idade').value;

    if (nomePet && especie && idade) {
      var pet = [nomePet, especie, idade];
      pets.push(pet);
      exibirPets();
      document.getElementById('cadastroPetForm').reset();
    }

  }

  // Função para exibir os pets na tabela
  function exibirPets() {
    var table = document.getElementById('cadastroPetTable');
    table.innerHTML = `
      <tr>
        <th>Nome do Pet</th>
        <th>Espécie</th>
        <th>Idade</th>
        <th>Ações</th>
      </tr>
      
${pets.map((pet, index) => `
        <tr>
          <td>${pet[0]}</td>
          <td>${pet[1]}</td>
          <td>${pet[2]}</td>
          <td>
            <button onclick="editarPet(${index})">Editar</button>
            <button onclick="excluirPet(${index})">Excluir</button>
          </td>
        </tr>`).join('')}
    `;
  }

  // Função para editar um pet
  function editarPet(index) {
    var pet = pets[index];
    document.getElementById('nomePet').value = pet[0];
    document.getElementById('especie').value = pet[1];
    document.getElementById('idade').value = pet[2];
    pets.splice(index, 1);
    exibirPets();
  }

  // Função para excluir um pet
  function excluirPet(index) {
    pets.splice(index, 1);
    exibirPets();
  }