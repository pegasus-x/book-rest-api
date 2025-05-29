const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // To parse JSON bodies

// In-memory books array
let books = [
 {id:1, title: 'The Monk Who Sold His Ferrari', author: 'Robin Sharma', year: 1999},
    {id:2, title: 'The Alchemist', author: 'Paulo Coelho', year: 1988}, 
    {id:3, title: 'The Power of Now', author: 'Eckhart Tolle', year: 1997},
];

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const id = books.length ? books[books.length - 1].id + 1 : 1;
  const newBook = { id, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update a book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const { title, author } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;

  res.json(book);
});

// DELETE a book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);
  if (index === -1) return res.status(404).json({ message: 'Book not found' });

  books.splice(index, 1);
  res.json({ message: 'Book deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
