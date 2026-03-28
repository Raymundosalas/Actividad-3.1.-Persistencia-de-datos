const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Ruta de la base de datos
const dbPath = path.join(__dirname, 'database.sqlite');

// Conexión
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al conectar:', err.message);
    } else {
        console.log('Conectado a SQLite');
    }
});

// Crear tabla
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS movies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            genre TEXT,
            year INTEGER
        )
    `);
});

module.exports = db;
