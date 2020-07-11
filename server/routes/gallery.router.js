const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
// DB CONNECTION
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
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

// GET Route
router.get('/', (req, res) => {
    let queryString = `SELECT * FROM galleryItems ORDER BY "id";`;
    pool.query(queryString).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        res.sendStatus(500);
    })
}); // END GET Route

module.exports = router;