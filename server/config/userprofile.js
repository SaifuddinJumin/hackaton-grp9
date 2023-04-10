const db = require('./database');

//create table for user profile
sql = `CREATE TABLE IF NOT EXISTS user_profile (uid INTEGER, position CHAR(50), roleid INTEGER, profile BLOB, github VARCHAR(255), constraint fk_uid FOREIGN KEY (uid) REFERENCES user (uid), constraint fk_roleid FOREIGN KEY (roleid) REFERENCES role (roleid))`
db.connection.query(sql,(error,result)=>{
	if(error) throw error;
	console.log(`table created: user_profile`)
})


// GET
async function getUserProfilebyUid(uid) {
    return new Promise((resolve, reject)=>{
        const sql = `SELECT * FROM user_profile WHERE uid=${uid}`;
        db.connection.query(sql, (error, result) => {
            if (error) reject (error);
            console.log(result);
            resolve(result)
        })
    })
    
}



async function getRoleidbyUid(uid) {
    return new Promise((resolve,reject)=>{
        const sql = `SELECT roleid FROM user_profile WHERE uid=${uid}`;
        db.connection.query(sql, (error, result) => {
            if (error) reject (error);
            console.log(result);
            resolve(result)
        })
    })
    
}

async function getProfilepicbyUid(uid){
    return new Promise((resolve,reject)=>{
        const sql = `SELECT profile FROM user_profile WHERE uid=${uid}`;
        db.connection.query(sql, (error, result) => {
            if (error) reject (error);
            console.log(result);
            resolve(result)
        })
    })
    
}

// POST:
async function addProfile(uid,position,roleid,profile,github){
    return new Promise((resolve,reject)=>{
        const sql = `INSERT INTO user_profile VALUES(${uid},'${position}',${roleid},'${profile}','${github}')`;
        db.connection.query(sql, (error, result) => {
            if (error) reject (error);
            console.log(result);
            resolve(result)
        })
    })
    
}

// PUT:
async function updateProfile(uid,position,profile,github){
    return new Promise((resolve,reject)=>{
        const sql = `UPDATE user_profile SET position='${ position }', profile = ${ profile }, github = '${ github}' where uid = ${uid}`;
        db.connection.query(sql, (error, result) => {
            if (error) reject (error);
            console.log(result);
            resolve(result)
        })
    })
    
}


module.exports = {
    getProfilepicbyUid,getRoleidbyUid,getUserProfilebyUid,addProfile,updateProfile
}