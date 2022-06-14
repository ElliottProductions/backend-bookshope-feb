const { Router } = require('express');
const { Book } = require('../models/Book');

module.exports = Router()
  .get('/', async (req, res) => {
    const books = await Book.getAll();
    const respData = books.map(({ id, released, title }) => ({ id, released, title }));
    res.json(respData);
  });
