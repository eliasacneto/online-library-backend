
# Book Management API

This is a simple API built in Node.js using Express to manage books. It provides endpoints for listing, creating, updating, and deleting books.


## Endpoints


#### List All Books
```http
  GET /books
```
Returns a list of all registered books.

#### Get a Specific Book

```http
  GET /books/:id
```

Returns the details of a specific book with the provided ID.

#### Create a New Book

```http
  POST /books
```
Creates a new book with the details provided in the request body.

#### Update an Existing Book

```http
  PUT /books/:id
```
Updates the details of an existing book with the provided ID.

#### Delete an Existing Book

```http
  DELETE /books/:id
```
Removes an existing book with the provided ID.

## Installation

#### 1. Clone the repository:

```bash
git clone https://github.com/your-username/repository-name.git

```
#### 2. Install dependencies:

```bash
npm install

```

#### 3. Run the server:

```bash
npm start

```
The server will be running at http://localhost:8080 by default.
## Usage/Examples

```bash
GET http://localhost:8080/books

```

#### Create a New Book

```bash
POST http://localhost:8080/book
Content-Type: application/json

{
  "id": 1,
  "title": "The Lord of the Rings",
  "pageNumbers": 576,
  "isbn": 8595084750,
  "publishCompany": "HarperCollins"
}
```

#### Update an Existing Book

```bash
PUT http://localhost:8080/book/1
Content-Type: application/json

{
  "id": 1,
  "title": "The Lord of the Rings",
  "pageNumbers": 576,
  "isbn": 978-8595084759,
  "publishCompany": "HarperCollins"
}
```

#### Delete an Existing Book

```bash
DELETE http://localhost:8080/book/1
```
## Tech Stack

- Node.js
- Express.js
- MongoDB (for data storage)
- Mongoose (ODM for MongoDB)
## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

