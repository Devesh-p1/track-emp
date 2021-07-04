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
        } else if (data.option === 'role') {
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
        else if (data.option === 'employee') {
            inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'what the mans first name?',
                    name: 'first'
                },
                {
                    type: 'input',
                    message: 'whats the mans last name?',
                    name: 'last'
                },
                {
                    type: 'input',
                    message: 'whats this crodie do?',
                    name: 'role'
                },
                {
                    type: 'input',
                    message: 'who run this shit?',
                    name: 'bigMan'
                }
            ])
            .then(function(data) {
                console.log(data);
                connection.connect();

                connection.query(
                    'insert into employee set',
                    {
                        first: data,first, last: data.role, bigMan: data.bigMan
                    },
                    function(error, hotdog, fields) {
                        if (error) throw error;
                        console.log(hotdog);
                    }
                );
            });
        } else if (data.option === 'view') {
            inquirer
            .prompt({
                type: 'list',
                message: 'what you tryna see fam?',
                name: 'option',
                choices: ['department', 'role', 'employee']
            })
            .then(function(data) {
                console.log(data);
                if (data.option === 'department') {
                    connection.query(
                        'select from department',
                        {
                            name: data.option
                        },
                        function(error, hotdog, feilds) {
                            if (error) throw error;
                            console.log(hotdog);
                        }
                    );
                }
                else if (data.option === 'role') {
                    connection.query(
                        'select that role',
                        {
                            name: data.option
                        },
                        function(error, hotdog) {
                            if (error) throw error;
                            console.log(hotdog);
                        }
                    );
                }
                else if (data.option === "employee") {
                    connection.query(
                      "SELECT * FROM employee",
                      { name: data.option },
                      function(error, hotdog, fields) {
                        if (error) throw error;
                        console.log(hotdog);
                      }
                    );
                  }
        
                });
            } else if (data.option === "remove") {
              inquirer
                .prompt({
                  type: "list",
                  message: "Where do you want to remove from?",
                  name: "option",
                  choices: ["department", "role", "employee"]
                })
                .then(function(data) {
                  console.log(data);
                  if (data.option === "department") {
                    inquirer
                      .prompt({
                        type: "input",
                        message: "What is the name of the department you want to remove?",
                        name: "option"
                      })
                      .then(function(data) {
                        console.log(data);
                        connection.connect();
        
                        connection.query(
                          "DELETE FROM department WHERE ?",
                          { name: data.option },
                          function(error, hotdog, fields) {
                            if (error) throw error;
                            console.log(hotdog);
                          }
                        );
                      });
                  }