const { Router } = require('express');
const { Author } = require('../models/Author');

module.exports = Router()
  .get('/', async (req, res) => {
    const authors = await Author.getAll();
    const respData = authors.map(({ id, name }) => ({ id, name }));
    res.json(respData);
  });
  
