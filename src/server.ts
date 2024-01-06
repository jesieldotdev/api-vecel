import express from 'express'
import {randomUUID} from "node:crypto"

const app = express()
app.use(express.json())

const port = process.env.PORT ?? 4000

const books = [{
    id: randomUUID(),
    title: "Alice",
    description: ""
  }]

app.get('/books', async (request, response) => {
  // const books = await prismaClient.book.findMany()
  
  return response.json(books)
})

app.post('/books', async (request, response) => {
  const { description, title } = request.body
  const book = {
    id:  randomUUID(),
      description,
      title,

  }
  books.push(book)
  return response.json(book)
})

app.listen(port, () => console.log('Server is running on port ', port))
