# 📚 Book REST API with Node.js and Express

A simple in-memory RESTful API to manage a list of books using Node.js and Express.

## 🚀 Features

- Get all books (`GET /books`)
- Add a new book (`POST /books`)
- Update a book by ID (`PUT /books/:id`)
- Delete a book by ID (`DELETE /books/:id`)

> 🔒 No database required — data is stored in-memory.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Postman (for testing)

---

## 📁 Project Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd book-api
2. Initialize npm 
npm init -y
3. Install dependencies
   npm install express
4. Run the server
   node server.js
5. Open in browser or Postman:
 http://localhost:3000/books
📬 API Endpoints
➤ Get All Books
Method: GET

URL: /books

Description: Returns a list of all books.

➤ Add a New Book
Method: POST

URL: /books

Headers:

Content-Type: application/json

Body Example:

json
{
  "title": "Clean Code",
  "author": "Robert C. Martin"
  "year": 1984
}
➤ Update a Book
Method: PUT

URL: /books/:id

Headers:

Content-Type: application/json

Body Example:

json
{
  "title": "Updated Title",
  "author": "Updated Author"
  "year": Updated Year
}
➤ Delete a Book
Method: DELETE

URL: /books/:id

🧪 Testing with Postman
Open Postman

Choose the appropriate HTTP method

Enter URL: http://localhost:3000/books (append /id for PUT/DELETE)

Go to the Body tab (for POST/PUT), choose raw and select JSON

Enter your JSON data

Hit Send

✅ Example Book Object
json
 {
        "id": 1,
        "title": "The Monk Who Sold His Ferrari",
        "author": "Robin Sharma",
        "year": 1999
    }

📌 Note:
All book data is stored in memory and will be lost when the server restarts.

📄 License
MIT License — free to use, modify, and distribute.
