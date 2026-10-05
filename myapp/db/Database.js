const mongoose = require("mongoose");

let instance = null;

class Database {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    async connect(options) {
        const db = await mongoose.connect(options);
        return db;
    }
}

module.exports = Database;