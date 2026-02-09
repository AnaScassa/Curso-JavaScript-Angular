// cria um objeto livro usando uma função de fábrica
function createBook(title, author, year, pages, chapters) {
  return {
    title,
    author,
    year,
    pages,
    chapters
  }
}

// adiciona um listener para o formulário de livro
document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault() // impede recarregar a página

  // obtém os valores dos campos do formulário
  const title = document.getElementById("title").value
  const author = document.getElementById("author").value
  const year = document.getElementById("publicationYear").value
  const pages = document.getElementById("pages").value
  const chapters = document.getElementById("chapters").value

  // instancia o objeto
  const book = createBook(title, author, year, pages, chapters)

  // exibe o resultado na página
  document.getElementById("result").innerText =
    `Livro adicionado: ${book.title} - ${book.author}`

  console.log(book)
})
