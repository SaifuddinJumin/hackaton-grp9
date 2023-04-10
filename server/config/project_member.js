const db = require('./database');
const mysql = require("mysql2")

//Constants
const db_name = "procast";
const user_table = "user";
const project_table = "project_status";
const member = "project_member";
const task_table = "task";
const role_table = "role";



//get all member
async function memberGet(){
    return new Promise((resolve, reject) => {
        const sql = `select * from ${member}`;
        db.connection.query(sql, (error, result) => {
            if(error) reject (error);
            resolve(result);
        })
    })
}

//get all member by pid
async function memberById(pid){
    return new Promise((resolve, reject) => {
        const sql = `select * from ${member}
        where pid = ${pid}`
        db.connection.query(sql, (error, result) => {
            if(error) reject (error);
            resolve(result);
        })
    })
}

//get member name by pid
async function mNameById(pid){
    return new Promise((resolve, reject) => {
        const sql = `select p.pid, u.username 
        FROM ${member} p 
        inner join ${user_table} u 
        ON p.uid = u.uid
        where p.pid = ${pid}`;
        db.connection.query(sql, (error, result) => {
            if(error) reject (error);
            resolve(result);
        })
    })
}

//insert new member to project
async function memberInsert(body){
    return new Promise ((resolve, reject)=>{
        let sql = `insert into ${member} 
        (uid, pid)
        values (${body.uid}, ${body.pid})`;
        db.connection.query(sql, (error, result) => {
            if(error) reject (error);
            resolve(result);
        })
    })
}

//delete member by id
async function mDeleteById(pid){
    return new Promise((resolve, reject)=>{
        let sql = `DELETE FROM ${member} where pid = ${pid}`;
        db.connection.query(sql, (error, result) => {
            if(error) reject (error);
            resolve(result);
        })
    })
}

module.exports = {
    memberGet,
    memberById,
    mNameById,
    memberInsert,
    mDeleteById
}