const express = require('express');

const app = express();

app.get('/client-files/*', (req, res) => {
    res.sendStatus(410);
})

app.get('/api/*', (req, res) => {
    res.sendStatus(410);
})

app.get('/rp/demo', (req, res) => {
    res.redirect(`https://rpnow.net${req.path}`);
});

app.get('/rp/*', (req, res) => {
    res.sendFile(__dirname+'/guide.html');
});

app.get('*', (req, res) => {
    res.redirect(`https://rpnow.net${req.path}`);
});

app.listen(3001);
