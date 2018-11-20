const app = require('express')();

app.get('/users', (req, res) => res.send('Hello Users API'));

app.listen(3001, () => console.log(`Users API listening on port 3001!`));