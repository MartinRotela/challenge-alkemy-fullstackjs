const express = require('express');
const db = require('../database/connection');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.dbConnection();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto ${this.port}`);
        });
    }

    async dbConnection() {
        try {
            await db.sync();

            console.log('Database online');
        } catch (error) {
            console.log(error);
            throw new Error('An unexpected error ocurred');
        }
    }
}

module.exports = Server;
