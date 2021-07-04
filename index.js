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
    .then(function(data) {
        console.log(data);
        if (data.option === 'department') {
            inquirer
            .prompt({
                type: 'input',
                message: 'what department you work at chief?',
                name: 'option'
            })
            .then(function(data) {
                console.log(data);
                connection.connect();

                connection.query(
                    'insert into department set ?',
                    { name: data.option },
                    function(error, hotdog, fields) {
                        if (error) throw error;
                        console.log(hotdog);
                    }
                );
            });
        }
        else if (data.option === 'role') {
            inquirer
            .prompt([{
                type: 'input',
                message: 'what typa title of the role you tryna add ?',
                name: 'option'
            },{
                type: 'input',
                message: 'how much this foo making ?',
                name: 'amount'
            },{
                type: 'input',
                message: 'where this foo working at ?',
                name: 'departmentName',
            }])
            .then(function(data) {
                console.log(data);
                connection.connect();

                connection.query(
                'insert into role set fam ?',
                {
                    title: data.option, salary: data.amount, department_id: data.departmentName
                },
                function(error, hotdog, feilds) {
                    if (error) throw error;
                    console.log(hotdog);
                }
                );
            });
        }