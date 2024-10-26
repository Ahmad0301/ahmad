// const http = require('http');
// const books1 = [
//     { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//     { title: "1984", author: "George Orwell", year: 1949 },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//     { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
//     { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
//   ];
//   const books2 = [
//     { title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
//     { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
//     { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
//     { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
//     { title: "The Odyssey", author: "Homer", year: -700 },
//   ];
  
  
// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url=='/login')
//     {
//         res.end (JSON.stringify(books1));
//     }
//     else if (req.method === 'GET' && req.url=='/signup')
//         {
//             res.end (JSON.stringify(books2));
//         }
// });
// const port =8000;
// server.listen(port,()=> {
//     console.log(`Server running on port ${port}`);
// });

const express = require('express');
const app = express();
const port = 3000;

app.get('/login', (req, res) => {
    res.json([
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
        { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
    ]);
});

app.get('/signup', (req, res) => {
    res.json([
        { title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
        { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
        { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
        { title: "The Odyssey", author: "Homer", year: -700 },
    ]);
});