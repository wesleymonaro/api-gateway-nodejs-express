const app = require('express')();

app.get('/products', (req, res) => res.send('Hello Products API'));

app.listen(3002, () => console.log(`Products API listening on port 3002!`));