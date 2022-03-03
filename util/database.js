const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});


module.exports = sequelize;

/*const mysql = require('mysql2')

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'node-complete'
})

module.exports = pool.promise();*/