const db = require('./database');

//create table for user
sql = `CREATE TABLE IF NOT EXISTS user (uid INTEGER PRIMARY KEY AUTO_INCREMENT, username CHAR(50) UNIQUE, email CHAR(50) UNIQUE, password CHAR(50))`
db.connection.query(sql,(error,result)=>{
	if(error) throw error;
	console.log(`table created: user`)
})

// GET
// getalluser
async function getAllUser() {
return new Promise((resolve,reject) =>{
    const sql = 'SELECT * FROM user';
    
    db.connection.query(sql, (error, result) => {
        if (error) reject (error);
        console.log(result);
        resolve(result)
    })
})
}
// getUsernameandPasswordByUsername
// async function getUsernameAndPasswordByUsername(username) {
// return new Promise((resolve,reject) => {
//     const sql = `SELECT username, password FROM user where username=${username}`
//     db.connection.query(sql, (error, result) => {
//         if (error) reject (error);
//         console.log(result);
//         resolve(result)
//     })
// })
    
// }
// getUidbyUsername
// async function getUidbyUsername(username) {
//     return new Promise((resolve,reject)=>{
//         const sql = `SELECT uid FROM user WHERE username='${username}'`
//         db.connection.query(sql, (error, result) => {
//             if (error) reject (error);
//             console.log(result);
//             resolve(result)
//         })
//     })
// }
// getUserlogindetailbyUsername
async function getUserlogindetail(username){
    return new Promise((resolve, reject) =>{
        const sql = `SELECT * FROM user WHERE username='${username}'`
        db.connection.query(sql, (error, result) => {
            if (error) reject (error);
            console.log(result);
            resolve(result)
        })
    })
}
// getUserInfobyUID
async function getUserInfobyUID(uid){
    return new Promise((resolve, reject) =>{
        const sql = `SELECT uid, username, email FROM user WHERE uid=${uid}`
        db.connection.query(sql, (error, result) => {
            if (error) reject (error);
            console.log(result);
            resolve(result)
        })
    })
}

//POST
//addNewUser
async function addNewUser(username, email, password) {
    return new Promise((resolve, reject)=>{
        const sql = `INSERT INTO user (username,email,password) VALUES ('${username}','${email}','${password}')`
        db.connection.query(sql, (error, result) => {
            if (error) reject (error);
            console.log(result);
            resolve(result)
        })
    })
    
}
//removeuser
async function removeUserbyUsername(username) {
    return new Promise((resolve, reject)=>{
        const sql = `DELETE FROM user WHERE username='${username}'`
        db.connection.query(sql, (error, result) => {
            if (error) reject (error);
            console.log(result);
            resolve(result)
        })
    })
    
}


module.exports = {
    getAllUser,
    getUserlogindetail,
    getUserInfobyUID,
    addNewUser,
    removeUserbyUsername
}