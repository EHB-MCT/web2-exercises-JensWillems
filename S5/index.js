const express = require('express');
const fs = require('fs/promises');
const bodyParser = require('body-parser');
const {
    MongoClient
} = require('mongodb');
const config = require('./config.json');

//Create mongo client to use
const client = new MongoClient(config.finalUrl);

const app = express();
const port = 1337;

app.use(bodyParser.json());
//Root route

app.get('/', (req, res) => {
    res.send('Everything is OK!');
});


// return all boardgames form the database
app.get('/boardgames', async (req, res) => {

    try {
        //connect to the db
        await client.connect();
        //retrieve the boardgame collection data
        const bgs = client.db('session5').collection('boardgames')
            .find({}).toArray();

        //send back the data with response
        res.status(200).send(bgs);
    } catch (error) {
        res.status(500).send({
            error: 'Something went wrong',
            value: error
        });
    }
});

// /boardgame?id=1234
app.get('/boardgame', async (req, res) => {
    console.log(req.query.id);
    try {
        //Read the file
        let boardgames = JSON.parse(await fs.readFile('data/boardgames.json'));


        // try and find the boardgame with provided id
        let bg = boardgames[req.query.id]

        if (bg) {
            //send back the file
            res.status(200).send(bg);
            return;
        } else {
            res.status(400).send('boardgame could not be found with id: ' + req.query.id);
        }


    } catch (error) {
        console.log(error);
        res.status(500).send('file could not be read! Try again later...');
    }

});

// save a boardgame
app.post('/saveBoardgame', async (req, res) => {
    //console.log(req.body);

    if (!req.body.id || !req.body.name || !req.body.genre || !req.body.mechanisms || !req.body.description) {
        res.status(400).send('Bad request: missing id, name, genre, mechanisms or description');
        return;
    }

    try {
        //Read the file
        let boardgames = await fs.readFile('data/boardgames.json');
        // Parse from string to an object
        boardgames = JSON.parse(boardgames);


        boardgames[req.body.id] = {
            name: req.body.name,
            genre: req.body.genre,
            mechanisms: req.body.mechanisms,
            description: req.body.description,
        }

        //safe the file
        await fs.writeFile('data/boardgames.json', JSON.stringify(boardgames));
        //Send back succesmessage
        res.status(201).send(`Boardgame succesfully saved with id ${req.body.id}`);
        return;
    } catch (error) {
        res.status(500).send('An error has occured!');
    }
});


app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
})