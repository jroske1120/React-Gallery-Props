const express = require('express');
const router = express.Router();
// DB CONNECTION
const pool = require('../modules/pool');

// PUT Route to increment likes
router.put('/like/:id', (req, res) => {
    console.log('req.prams.id is:',req.params.id);
    let queryString = `UPDATE galleryItems SET likes = likes+1 WHERE id = $1;`;
    pool.query(queryString, [req.params.id]).then((result)=>{
        res.send(result.rows);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
}); // END PUT Route

// GET Route that shows the most recently added first
router.get('/', (req, res) => {
    let queryString = `SELECT * FROM galleryItems ORDER BY "id" DESC;`;
    pool.query(queryString).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        res.sendStatus(500);
    })
}); // END GET Route

// Setup a POST route to add a new song to the database
//Only need url and description; likes are set to 0 and id is automatic
router.post('/', (req, res) => {
    let queryString = `INSERT INTO galleryItems ( path, description) VALUES 
    ($1, $2);`;
    pool.query(queryString, [req.body.path, req.body.description])
        .then((result) => {
            console.log(`Added song to the database`, req.body.path);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryString}`, error);
            res.sendStatus(500);
        })
})

//Delete
router.delete('/:id', (req, res) => {
    console.log('Delete request for id', req.params.id);
    let queryString = 'DELETE FROM galleryItems WHERE id=$1;';
    pool.query(queryString, [req.params.id])
        .then((result) => {
            console.log('pic deleted');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryString}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

module.exports = router;