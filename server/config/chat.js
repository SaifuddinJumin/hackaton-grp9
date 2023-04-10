const db = require('./database');
const mysql = require("mysql2");

//Constants
const db_name = "procast";
const user_table = "user";
const project_table = "project_status";
const member = "project_member";
const task_table = "task";
const role_table = "role";
const chat_table = "chat";
const table_name = "chat";

//Create table - if not exists
sql = `CREATE TABLE IF NOT EXISTS ${table_name} (
    receiver_uid INTEGER,
    sender_uid INTEGER,
    content VARCHAR(100),
    chat_order INTEGER PRIMARY KEY AUTO_INCREMENT,
    FOREIGN KEY (receiver_uid) REFERENCES ${user_table}(uid),
    FOREIGN KEY (sender_uid) REFERENCES ${user_table}(uid)
    )`

db.connection.query(sql,(err,res)=>{
    if(err) throw err;
    console.log(`Table found: ${table_name}`)
})

//Create
async function createNewChat(body){
    return new Promise((resolve,reject)=>{
        let sql = `insert into ${chat_table}
        (receiver_uid, sender_uid, content) values
        (${body.receiver_uid}, ${body.sender_uid}, '${body.content}')`;

        db.connection.query(sql,(error,result)=>{
            if(error) reject(error);
            //console.log(`New chat recorded in table: ${chat_table}, sent by ${sender_uid}`)
            resolve(result);
        })
    })
}

//Read
async function getLastChatOrderBy(sender_uid){
    return new Promise((resolve,reject)=>{
        let sql = `SELECT max(chat_order) FROM ${chat_table} WHERE sender_uid=${sender_uid}`
    
        db.connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`Last chat order found sent by sender uid: ${sender_uid}, is: ${res}`)
            resolve(res)
        })
    })
}

async function getLastChatContent(){
    return new Promise((resolve,reject)=>{
        let sql = `select * from ${chat_table} order by chat_order desc limit 1;`
    
        db.connection.query(sql,(err,res)=>{
            if(err) reject(err);
            resolve(res)
        })
    })
}

async function getLastTenChat(){
    return new Promise((resolve, reject)=>{
        let sql=`SELECT * FROM ${chat_table} ORDER BY chat_order DESC LIMIT 10`;
        db.connection.query(sql,(err,res)=>{
            if(err) reject(err);
            //console.log(`Last 10 chat activity found:`)

            if(res.Length > 1) {
                res.forEach(row => {
                    console.log(`${row.chat_order}: ${row.content}`)
                });
            }
            resolve(res);
        })
    })
}

//Delete | sql issue
// async function deleteLastChatBy(sender_uid){
//     return new Promise ((resolve, reject)=>{
//         let sql = `SELECT * FROM ${chat_table} where chat_order=(SELECT max(chat_order) FROM ${chat_table}) AND sender_uid = ${sender_uid};`
//         let result = sql;
//         db.connection.query(sql,(err,res)=>{
//             if(err) reject(err);
//             console.log(`Chat successfully deleted`)
//             resolve(res);
//         })
//     })
// }

module.exports ={
    createNewChat,
    getLastChatOrderBy,
    getLastChatContent,
    getLastTenChat
   // deleteLastChatBy
}