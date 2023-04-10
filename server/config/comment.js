const db = require('./database');

//Constants
const table_name='comment'
const connection = db.connection;
let sql;

//Create table - if not exists
sql = `CREATE TABLE IF NOT EXISTS ${table_name} (
    commenter_uid INTEGER,
    content VARCHAR(100),
    date DATETIME,
    cid INTEGER PRIMARY KEY AUTO_INCREMENT
    )`

connection.query(sql,(err,res)=>{
    if(err) throw err;
    console.log(`Table found: ${table_name}`)
})

//CRUD Operations
//Create
async function createNewComment(commenter_uid, content) {
    return new Promise ((resolve, reject)=>{
        sql = `INSERT INTO ${table_name} (commenter_uid, content, date) VALUES(
            ${commenter_uid},
            '${content}',
            NOW()
        )`
        
        connection.query(sql,(err,res)=>{
            if(err)  reject(err);
            console.log(`New comment recorded in table: ${table_name}, by: ${commenter_uid}`);
            console.log('res is: '+res);

            resolve(res);
        })
    })
}

//Read
async function getLastComment(){
    return new Promise((resolve, reject)=>{
        sql = `SELECT * FROM ${table_name} ORDER BY date DESC LIMIT 1`

        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log('Last comment found');
            resolve(res);
        })
    })
}

async function getCommentById(cid){
    return new Promise((resolve, reject)=>{
        sql = `SELECT * FROM ${table_name} WHERE cid=${cid}`

        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log('Last comment found');
            resolve(res);
        })
    })
}

//Update


//Delete
//This function probably needs revision
async function deleteComment(cid){
    return new Promise((resolve, reject)=>{
        sql=`DELETE FROM ${table_name} WHERE cid=${cid}`
        
        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`Comment successfully deleted in table: ${table_name}, at comment id: ${cid}`);
            resolve(res);
        })
    })
}

module.exports={
    createNewComment,
    getLastComment,
    getCommentById,
    deleteComment
}
