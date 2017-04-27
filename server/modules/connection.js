// connection.js
console.log("4 connection.js loaded");
var connectionString = '';

if(process.env.DATABASE_URL != undefined) {
    connectionString = process.env.DATABASE_URL + "?ssl=true";
} else {
    connectionString = 'postgres://localhost:5432/SOLO_taskapp';
}

module.exports = connectionString;
