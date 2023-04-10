const db = require('./database');

//Constants
const table_name='task'
const role_table='role'
const user_table='user'
const project_table='project_status'
const connection = db.connection;
let sql;

//Create table - if not exists
sql = `CREATE TABLE IF NOT EXISTS ${table_name} (
    tid INTEGER PRIMARY KEY AUTO_INCREMENT,
    task_name VARCHAR(50),
    status ENUM ('complete','pending','cancel') DEFAULT 'pending',
    description VARCHAR(200),
    file VARCHAR(50),
    roleid INTEGER, 
    uid INTEGER, 
    pid INTEGER,
    FOREIGN KEY (roleid) REFERENCES ${role_table}(roleid),
    FOREIGN KEY (uid) REFERENCES ${user_table}(uid),
    FOREIGN KEY (pid) REFERENCES ${project_table}(pid)
    )`

connection.query(sql,(err,res)=>{
    if(err) throw (err);
    console.log(`Table found: ${table_name}`)
})


//CRUD Operations
//Create
//Insert new data to the table
async function createNewTask2(pid, task_name, description){
    return new Promise((resolve,reject)=>{
        sql = `INSERT INTO ${table_name} (pid, task_name, description) VALUES (
            ${pid}, '${task_name}', '${description}')`

        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`New task created with name: ${task_name}`)

            resolve(res);
        })
    })
}

async function createNewTask1(pid, task_name, description, roleid){
    return new Promise((resolve,reject)=>{
        sql = `INSERT INTO ${table_name} (pid, task_name, description, roleid) VALUES (
            ${pid}, '${task_name}', '${description}', ${roleid})`

        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`New task created with name: ${task_name}`)
            
            resolve(res)
        })
    })
    
}

//Read
//Get the data from the table
async function getTaskIdByName(pid, task_name){
    return new Promise((resolve,reject)=>{
        sql=`SELECT * FROM ${table_name} WHERE task_name = '${task_name}' AND pid = ${pid}`

        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            
            //display all id of tasks found by name in the project
            res.forEach(row => {
                console.log(`Task found with name ${table_name} at task id: ${row.tid}, in project id: ${row.pid}`)
            });
    
            resolve(res);
        })
    })   
}

async function getLastTask(pid){
    return new Promise((resolve,reject)=>{
        sql=`SELECT * FROM ${table_name} WHERE pid = ${pid} ORDER BY tid DESC LIMIT 1`
        
        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`Last task found in project id: ${pid}`)

            resolve(res);
        })
    })
}

async function getTaskById(pid, tid){
    return new Promise((resolve,reject)=>{
        sql=`SELECT * FROM ${table_name} WHERE pid = ${pid} AND tid = ${tid}`

        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`Task found at task id: ${tid}, with value: ${res}`)

            resolve(res);
        })
    })
}

async function getTaskStatusById(pid, tid){
    return new Promise((resolve,reject)=>{
        sql=`SELECT status FROM ${table_name} WHERE pid = ${pid} AND tid = ${tid}`
        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`Task status found at task id: ${tid}, with value: ${res}`)
           
            resolve(res);
        })
    })
}

async function getTotalTask(pid){
    return new Promise((resolve,reject)=>{
        sql=`SELECT COUNT(tid) FROM ${table_name} WHERE pid = ${pid}`
        
        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`Total tasks found by project id: ${pid}`)
            
            resolve(res);
        })
    })
}

async function getTotalCompleteTask(pid){
    return new Promise((resolve,reject)=>{
        sql=`SELECT COUNT(tid) FROM ${table_name} WHERE pid = ${pid} AND status = "complete"`
        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`Total complete tasks found by project id: ${pid}`)
            
            resolve(res);
        })
    })
}


async function getTotalPendingTask(pid){
    return new Promise((resolve,reject)=>{
        sql=`SELECT COUNT(tid) FROM ${table_name} WHERE pid = ${pid} AND status = "pending"`

        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`Total pending tasks found by project id: ${pid}`)
            
            resolve(res);
        })
    })
    
}


async function getTotalCancelTask(pid){
    return new Promise((resolve,reject)=>{
        sql=`SELECT COUNT(tid) FROM ${table_name} WHERE pid = ${pid} AND status = "cancel"`
        
        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`Total cancel tasks found by project id: ${pid}`)
           
            resolve(res);
        })
    })
}

//Update
//Update the value of the table

async function updateTaskNameById(pid, tid, value){
    return new Promise((resolve,reject)=>{
        sql = `UPDATE ${table_name} SET task_name = '${value}' WHERE pid=${pid} AND tid=${tid}`
        
        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`Task name changed successfully at table: ${table_name}, with value: ${value}`)

            resolve(res);
        })
    })
}


async function updateTaskDescriptionById(pid, tid, value){
    return new Promise((resolve,reject)=>{
        sql = `UPDATE ${table_name} SET description = '${value}' WHERE pid=${pid} AND tid=${tid}`
        
        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`Task description changed successfully at table: ${table_name}, with value: ${value}`)

            resolve(res);
        })
    })
}

async function updateTaskStatusById(pid, tid, value){
    return new Promise((resolve,reject)=>{
        sql = `UPDATE ${table_name} SET status = '${value}' WHERE pid=${pid} AND tid=${tid}`
        
        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`Task status changed successfully at table: ${table_name}, with value: ${value}`)

            resolve(res);
        })
    })
}

async function updateTaskFileById(pid, tid, value){
    return new Promise((resolve, reject)=>{
        sql=`UPDATE ${table_name} SET file = '${value}' WHERE pid=${pid} AND tid=${tid}`

        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`Task file changed successfully at table: ${table_name}, with value: ${value}`)

            resolve(res);
        })
    })
}

async function updateTaskRoleById(pid, tid, roleid){
    return new Promise((resolve,reject)=>{
        sql=`UPDATE ${table_name} SET roleid=${roleid} WHERE pid=${pid} AND tid=${tid}`
        
        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`Task role changed successfully at table: ${table_name}, with value: ${roleid}`)

            resolve(res);
        })
    })
}

async function updateTaskUserById(pid, tid, uid){
    return new Promise((resolve,reject)=>{
        sql=`UPDATE ${table_name} SET uid = ${uid} WHERE pid=${pid} AND tid=${tid}`
        
        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`Task status changed successfully at table: ${table_name}, with user id: ${uid}`)

            resolve(res)
        })
    })
}


//Delete
//Delete the data from the table
async function deleteTaskById(pid, tid){
    return new Promise((resolve,reject)=>{
        sql=`DELETE FROM ${table_name} WHERE tid = ${tid} AND pid=${pid}`;
        connection.query(sql,(err,res)=>{
            if(err) reject(err);
            console.log(`Task deleted successfully at table: ${table_name} with id: ${tid}`)

            resolve(res)
        })
    })
}

async function deleteTaskbyName(pid, task_name){
    return new Promise((resolve,reject)=>{
        sql=`DELETE FROM ${table_name} WHERE task_name = "${task_name}" AND pid=${pid}`;
        
        connection.query(sql,(err,res)=>{
            if(err) reject(err);            
            
            console.log(`Task deleted successfully at table: ${table_name}, with name: ${task_name}`)

            resolve(res)
        })
    })
}

module.exports={
    createNewTask1,
    createNewTask2,
    getTaskIdByName,
    getLastTask,
    getTaskById,
    getTaskStatusById,
    getTotalTask,
    getTotalCompleteTask,
    getTotalPendingTask,
    getTotalCancelTask,
    updateTaskNameById,
    updateTaskDescriptionById,
    updateTaskStatusById,
    updateTaskFileById,
    updateTaskRoleById,
    updateTaskUserById,
    deleteTaskById,
    deleteTaskbyName
}