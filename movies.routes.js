const express = require('express');
const router = express.Router();
const db = require('./database');


// ==========================
// CREATE
// ==========================
router.post('/', (req, res) => {
    const { title, genre, year } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'El título es obligatorio' });
    }

    const sql = `INSERT INTO movies (title, genre, year) VALUES (?, ?, ?)`;

    db.run(sql, [title, genre, year], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json({
            message: 'Película creada correctamente',
            id: this.lastID
        });
    });
});


// ==========================
// READ (TODOS)
// ==========================
router.get('/', (req, res) => {
    const sql = `SELECT * FROM movies`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json(rows);
    });
});


// ==========================
// READ (POR ID)
// ==========================
router.get('/:id', (req, res) => {
    const sql = `SELECT * FROM movies WHERE id = ?`;

    db.get(sql, [req.params.id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (!row) {
            return res.status(404).json({ error: 'Película no encontrada' });
        }

        res.json(row);
    });
});


// ==========================
// UPDATE
// ==========================
router.put('/:id', (req, res) => {
    const { title, genre, year } = req.body;

    const sql = `
        UPDATE movies
        SET title = ?, genre = ?, year = ?
        WHERE id = ?
    `;

    db.run(sql, [title, genre, year, req.params.id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (this.changes === 0) {
            return res.status(404).json({ error: 'Película no encontrada' });
        }

        res.json({
            message: 'Película actualizada',
            cambios: this.changes
        });
    });
});


// ==========================
// DELETE
// ==========================
router.delete('/:id', (req, res) => {
    const sql = `DELETE FROM movies WHERE id = ?`;

    db.run(sql, [req.params.id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (this.changes === 0) {
            return res.status(404).json({ error: 'Película no encontrada' });
        }

        res.json({
            message: 'Película eliminada',
            cambios: this.changes
        });
    });
});

module.exports = router;
