const express = require('express');
const server = express();
const axios = require('axios');
const cors = require('cors');
const route = express.Router();

server.use(express.json());
server.use(cors());

const port = 3030;

route.get('/', async (req, res) => {
  try {
    const response = await axios('https://pokeapi.co/-')
    console.log(response)
  } catch (error) {
    console.log(error)
  }
})

server.listen(port, () => {
  try {
    console.log(`Success connection at port : ${port}`);
  } catch (error) {
    console.log(error)
  }
})