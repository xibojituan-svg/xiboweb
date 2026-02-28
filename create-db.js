const mysql = require('mysql2/promise');

async function createDb() {
    try {
        const connection = await mysql.createConnection({
            host: '10.209.2.162',
            user: 'test',
            password: 'kNpZS3MGgtuVg3p5',
            port: 3302
        });
        await connection.query("CREATE DATABASE IF NOT EXISTS xiboweb;");
        console.log("Database xiboweb ensured.");
        await connection.end();
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
createDb();
