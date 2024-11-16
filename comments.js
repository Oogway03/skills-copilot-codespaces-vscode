//Create web server
const express = require('express');
const app = express();
app.use(express.json()); //middleware to parse request body
const PORT = 3000;

//Data
const comments = [
    {id: 1, comment: "This is a comment"},
    {id: 2, comment: "This is another comment"},
    {id: 3, comment: "This is yet another comment"},
    {id: 4, comment: "This is the last comment"}
];

//GET all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});