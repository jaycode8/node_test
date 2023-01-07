const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 4500;
const hostname = '0.0.0.0'

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.send('<h1>Welcome to express Home page</h1><br/><a href="/testRoute">test route</a>');
});

app.get('/testRoute', (req, res) => {
    res.render('home', {
        title: 'home page'
    })
})

const server = http.createServer(app);

server.listen(PORT, hostname, () => {
    console.log(`server runing at http://${hostname}:${PORT}/`)
})