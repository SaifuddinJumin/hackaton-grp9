const db = require('./database');
const mysql = require("mysql2");

//Constants
const db_name = "procast";
const user_table = "user";
const project_table = "project_status";
const member = "project_member";
const task_table = "task";
const role_table = "role";

// create the table if it dosent exits
sql = `create table if not exists project_status
    (pid integer primary key, 
    project_title varchar(255),
    status ENUM ('complete','pending','cancel') DEFAULT 'pending', 
    project_leader integer, 
    foreign key (project_leader) references user(uid))`;
db.connection.query(sql, (error, result) => {
    if(error) throw error;
    console.log(`Table found: `)
})

//get whole project table
async function projectGet(){
        return new Promise((resolve, reject)=>{
        const sql = `SELECT * FROM ${project_table}`;
        db.connection.query(sql, (error, result) => {
            if(error) reject (error);
            resolve(result);
        })
    })
}

// get project table by id
async function projectById(id){
    return new Promise((resolve, reject)=>{
        const sql = `SELECT * FROM ${project_table} WHERE pid = ${id}`;
        db.connection.query(sql, (error, result) => {
            if(error) reject (error);
            resolve(result);
        })
    })
}


// get whole project table with username
async function projectByUser(){
    return new Promise((resolve, reject)=>{
        const sql = `SELECT p.pid, p.project_title, p.status,u.username 
        FROM ${project_table} p 
        INNER JOIN ${user_table} u 
        ON p.Project_Leader = u.uid`;
        db.connection.query(sql, (error, result) => {
            if(error) reject (error);
            resolve(result);
        })
    })
}

// get whole project table with username by id
async function projectByUserId(id){
    return new Promise((resolve, reject)=>{
        let sql = `SELECT p.pid, p.project_title, u.username 
        FROM ${project_table} p 
        INNER JOIN ${user_table} u 
        ON p.Project_Leader = u.uid
        WHERE pid = ${id}`;
        db.connection.query(sql, (error, result) => {
            if(error) reject (error);
            resolve(result);
        })
    })
}

// insert new project
async function projectInsert(body){
    return new Promise ((resolve, reject)=>{
        let sql = `insert into ${project_table} 
        (pid, project_title, project_leader)
        values (${body.pid}, '${body.project_title}', ${body.project_leader})`;
        db.connection.query(sql, (error, result) => {
            if(error) reject (error);
            resolve(result);
        })
    })
}

// update status by id
async function pStatusUpdate(pid, body){
    return new Promise ((resolve, reject)=>{
        let sql = `update ${project_table} set status='${ body.status }' where pid = ${pid}`;
        db.connection.query(sql, (error, result) => {
            if(error) reject (error);
            resolve(result);
        })
    })
}

// update project title by id
async function pTitleUpdate(pid, body){
    return new Promise((resolve, reject)=>{
        let sql = `update ${project_table} set project_title='${ body.project_title }' where pid = ${pid}`;
        db.connection.query(sql, (error, result) => {
            if(error) reject (error);
            resolve(result);
        })
    })
}

// delete content by id
async function deleteById(pid){
    return new Promise((resolve, reject)=>{
        let sql = `DELETE FROM project_status where pid = ${pid}`;
        db.connection.query(sql, (error, result) => {
            if(error) reject (error);
            resolve(result);
        })
    })
}

module.exports = {
    projectGet,
    projectById,
    projectByUser,
    projectByUserId,
    projectInsert,
    pStatusUpdate,
    pTitleUpdate,
    deleteById
}