const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const fs = require('fs');

//setto le cors policy per accettrae richieste da qualunque sito
const cors = require('cors');
app.use(cors());

const users = [];

app.use(bodyParser.json());


/**
 * route per il json dei dati da inserire nel cv
 */
app.get('/cvData', (req, res) => {
    let rawdata = fs.readFileSync('./dataFile/cvData.json');
    let student = JSON.parse(rawdata);
    res.json(student)
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});