const url = 'https://jsonplaceholder.typicode.com/posts';
const port = 1;
const express = require('express');
const app = express();
const axios = require('axios');
axios.get(url)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });

app.listen(port, () => {
    console.log("server started: ");
})