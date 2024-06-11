// Capturando o botão de cadastrar
const createBtn = document.getElementById('createBtn')

// Escuta ao evento de click no botão de cadastrar
createBtn.addEventListener("click", createGame)

// Capturando o botão de editar
const updateBtn = document.getElementById('updateBtn')

// Escuta ao evento de click no botão de editar
updateBtn.addEventListener("click", updateGame)

// Enviando uma requisição GET para API para listar todos os games
axios.get("http://localhost:4000/games").then((response) => {
    const games = response.data.games
    const listGames = document.getElementById("games")

    games.forEach((game) => {
      let item = document.createElement("li")

      // Setando o atributo ID para cada game
      item.setAttribute("data-id", game._id)
      item.setAttribute("data-title", game.title)
      item.setAttribute("data-year", game.year)
      item.setAttribute("data-price", game.price)

      item.innerHTML = `<h4>${game.title}</h4>
        <p>Ano: ${game.year}</p> 
        <p>Preço: ${game.price}</p>
        <p>ID: ${game._id}</p>`

        var deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Deletar"
        deleteBtn.classList.add("btn", "btn-danger", "mb-3", "mx-2")
        deleteBtn.addEventListener("click", () => {
          deleteGame(item)
        })

        var editBtn = document.createElement("button")
        editBtn.innerHTML = "Editar"
        editBtn.classList.add("btn", "btn-warning", "mb-3")
        editBtn.addEventListener("click", () => {
          LoadForm(item)
        })

        item.appendChild(deleteBtn)
        item.appendChild(editBtn)
        listGames.appendChild(item)
      })
    }).catch((error) => {
      console.log(error)
    })

// Função para DELETAR games
function deleteGame(listItem) {
  const id = listItem.getAttribute("data-id")
  axios.delete(`http://localhost:4000/game/${id}`).then(response => {
      alert("Game deletado!")
      location.reload()
  }).catch(err => {
      console.log(err)
  })
}

// Função para CADASTRAR um game
function createGame(){
  const form = document.getElementById("createForm")

  form.addEventListener("submit", function(event){
    event.preventDefault()
  })

  const titleInput = document.getElementById("title")
  const yearInput = document.getElementById("year")
  const priceInput = document.getElementById("price")

  const game = {
    title: titleInput.value,
    year: yearInput.value,
    price: priceInput.value
  }

  axios.post("http://localhost:4000/game", game).then(response => {
    if(response.status == 201){
      alert("Game cadastrado!")
      location.reload()
    }
  }).catch(error => {
    console.log(error)
  })
}

// Função para ALTERAR um game
function updateGame(){
  alert('clicou')
}