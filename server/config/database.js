const db_name = 'procast'

// import mysql package
const mysql = require('mysql2');

// create a connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    // database: 'procast'
})

connection.connect((err) => {
    if(err) throw err;
    console.log('database connected successfully')
})

//create database if doesnt exist
sql = `CREATE DATABASE IF NOT EXISTS ${db_name}`
connection.query(sql,(error,result)=>{
	if(error) throw error;
	console.log(`database found: ${db_name}`)
})

//use database
sql = `USE ${db_name}`
connection.query(sql,(error,result)=>{
	if(error) throw error;
	console.log(`database used: ${db_name}`)
})

module.exports = {
    connection
}