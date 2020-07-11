const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
// DB CONNECTION
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for (const galleryItem of galleryItems) {
        if (galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
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