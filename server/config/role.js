const db = require('./database')

//create table for role
sql = `CREATE TABLE IF NOT EXISTS role (roleid INTEGER PRIMARY KEY AUTO_INCREMENT, role_name CHAR(50) UNIQUE)`
db.connection.query(sql,(error,result)=>{
	if(error) throw error;
	console.log(`table created: role`)
})

// get all role
async function getAllRole() {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM role`

        db.connection.query(sql, (error, result) => {
            if (error) reject(error)
            console.log(result);
            resolve(result)
        })
    })
}

// get role by roleid
async function getRolebyRoleid(roleid) {
    return new Promise((resolve, reject) => {

        const sql = `SELECT role_name FROM role WHERE roleid=${roleid}`

        db.connection.query(sql, (error, result) => {
            if (error) reject(error)
            console.log(result);
            resolve(result)
        })
    })
}

// addRole
async function addRole(rolename) {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO role (role_name) VALUES ('${rolename}')`

        db.connection.query(sql, (error, result) => {
            if (error) reject(error)
            console.log(result);
            resolve(result)
        })
    })
}

module.exports = {
    getAllRole,
    getRolebyRoleid,
    addRole
}