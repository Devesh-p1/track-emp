const inquirer = require('inquirer')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'emp_db'
});
//hotdogs are the results 
inquirer
    .prompt({
        type: 'list',
        message: 'whatcha tryna do ?',
        name: 'option',
        choices: ['add', 'view', 'remove']
    })