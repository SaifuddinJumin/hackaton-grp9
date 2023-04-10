// import modules
const express = require('express');
// import database config
const db = require('./config/database.js');
const user = require('./config/user.js');
const userprof = require('./config/userprofile.js');
const role = require('./config/role.js');
const project = require("./config/project_get.js");
const member = require("./config/project_member.js");
const chat = require("./config/chat.js");
const task = require('./config/task.js');
const comment = require('./config/comment.js');

// initialize express app
const app = express();

// middleware
app.use(express.json())


/* ------------------------- USER.JS ------------------------- */ 
// setup endpoint to perform an action on database
// GET: 
// get all users
app.get('/procast/users', async (req, res) => {
    try {
        const result = await user.getAllUser()
        console.log('result from api' + typeof (result))

        res.status(200).send(result)
    } catch (err) {
        console.log('api endpoint error: ' + err)
    }

//     // const sql = 'SELECT * FROM user';
//     // db.connection.query(sql, (error, result) => {
//     //     if (error) throw error;
//     //     console.log(result);
//     //     res.json({
//     //         data:result
//     //     })
//     // })
})
// // get user id by username
// app.get('/procast/users/:username', async (req, res) => {
//     try {
//         let username = req.params.username;
//         const result = await user.getUidbyUsername(username);
//         console.log('result from api' + result)

//         res.status(200).send(result)
//     } catch (err) {
//         console.log('api endpoint error: ' + err)
//     }
// })
// // get username and password by username
// app.get('/procast/users/:username', async (req, res) => {
//     try{
//         let username = req.params.username;
//         const result = await user.getUsernameAndPasswordByUsername(username)

//         res.status(200).send(result)
//     }catch(err){
//         console.log('api endpoint error: ' + err)
//     }
// })
// get user login detail by username
app.get('/procast/users/:username', async (req,res) => {
    try{
        let username = req.params.username;
        const result = await user.getUserlogindetail(username)
        res.status(200).send(result)
    }catch(err){
        console.log('api endpoint error: ' + err)
    }
})
// get user info by uid
app.get('/procast/userId/:id', async (req,res) => {
    try{
        let uid = req.params.id;
        const result = await user.getUserInfobyUID(uid)
        console.log("user id is: "+ uid);
        res.status(200).send(result)
    }catch(err){
        console.log('api endpoint error: ' + err)
    }
})

// POST: create new user
app.post('/procast/signup', async (req, res) => {
    try{
        let addUser = req.body;
        await user.addNewUser(addUser.username,addUser.email,addUser.password)

        res.status(200).json({
            error: false,
            message:'new user has been registered'
        })
    }catch(err){
        console.log('api endpoint error: ' + err)
    }

})

// DELETE: delete users
app.delete('/procast/removeuser/:username', async (req, res) => {
    try{
        let username = req.params.username
        await user.removeUserbyUsername(username)

        res.status(200).json({
            message:'user has been removed'
        })
    }catch(err){
        console.log('api endpoint error: ' + err)
    }
    
})

/* ------------------------- USERPROFILE.JS ------------------------- */ 
//GET:
//getUserProfilenyUID
app.get('/procast/userprofile/:uid', async (req,res) => {
    try{
        let uid = req.params.uid
        const result = await userprof.getUserProfilebyUid(uid)

        res.status(200).send(result)
    }catch(err){
        console.log('api endpoint error: ' + err)
    }
})

// POST:
// add ProfileDetail
app.post('/procast/addprofile', async (req, res) => {
    try{
        let adduserprof = req.body
        await userprof.addProfile(adduserprof.uid,adduserprof.position,adduserprof.roleid,adduserprof.profilepic,adduserprof.github)

        res.status(200).json({
            error: false,
            message:'profile has been added'
        })
    }catch(err){
        console.log('api endpoint error: ' + err)
    }
})

// PUT:
// update user profile by uid
app.put('/procast/updateprofile/:uid', async(req, res) => {
try{
    let uid = req.params.uid
    let updateProf = req.body
    await userprof.updateProfile(uid,updateProf.position,updateProf.profilepic,updateProf.github)

    res.status(200).json({
        error: false,
        message:'profile has been updated'
    })
}catch(err){
        console.log('api endpoint error: ' + err)
    }
})


/* ------------------------- ROLE.JS ------------------------- */ 

// GET:
// getAllRole
app.get('/procast/role', async (req, res) => {
    try{
        const result = await role.getAllRole()
        res.status(200).json({
            data: result
        })
    }catch(err){
        console.log('api endpoint error: ' + err)
    }
})
// getRolebyRoleid
app.get('/procast/role/:roleid', async (req, res) => {
    try{
        let roleid = req.params.roleid
        const result = await role.getRolebyRoleid(roleid)

        res.status(200).send(result)
    }catch(err){
        console.log('api endpoint error: ' + err)
    }
})
// POST:
// addRole
app.post('/procast/addrole', async (req, res) => {
    try{
        let addRole = req.body
        await role.addRole(addRole.rolename)

        res.status(200).json({
            message: 'role has been added'
        })
    }catch(err){
        console.log('api endpoint error: ' + err)
    }
})

/* ------------------------- PROJECT.JS ------------------------- */ 
//GET: project status
app.get("/project", async (req, res) => {
    try{
        const result = await project.projectGet();
        res.status(200).send(result);
    }
    catch(error){
        console.log(error)
    }
})

// GET: get project by id
app.get("/project/:id", async (req, res)=>{
    try{
        let id = req.params.id;
        const result = await project.projectById(id);
        res.status(200).send(result);
    }
    catch(error){
        console.log(error);
    }
})

// get whole project table with user name 
app.get("/pLeader/", async (req, res)=>{
    try{
        const result = await project.projectByUser();
        res.status(200).send(result);
    }
    catch(error){
        console.log(error)
    }
})

// get whole project table with user name by pid
app.get("/pLeader/:id", async (req, res)=>{
    try{
        let id = req.params.id;
        const result = await project.projectByUserId(id);
        res.status(200).send(result);
    }
    catch(error){
        console.log(error);
    }
})

//insert new project
app.post("/procast", async (req, res) => {
    try{
        let body = req.body;
        const result = await project.projectInsert(body);
        res.status(201).send(result);
    }
    catch(error){
        console.log(error);
    }
})

//Put: altering status by id
app.put("/pStat/:id", async (req, res) => {
    try{
        let pid = req.params.id;
        let body = req.body;
        const result = await project.pStatusUpdate(pid, body);
        //console.log("pStat are : "+ pid, body);
        res.status(202).send(result);
    }
    catch(error){
        console.log(error);
    }
})

//Put: altering title by id
app.put("/pTitle/:id", async (req, res) => {
    try{
        let pid = req.params.id;
        let body = req.body;
        const result = await project.pTitleUpdate(pid, body);
        res.status(202).send(result);
    }
    catch(error){
        console.log(error)
    }
})

// DELETE: delete
app.delete("/pDelete/:id", async(req, res) => {
    try{
        let pid = req.params.id;
        const result = await project.deleteById(pid);
        res.status(202).send(result);
    }
    catch(error){
        console.log(error)
    }
})

/* ------------------------- PROJECT_MEMBER.JS ------------------------- */
//Get all member
app.get("/member", async (req, res) => {
    try{
        const result = await member.memberGet();
        res.status(200).send(result);
    }
    catch(error){
        console.log(error);
    }
})

//Get all member by pid
app.get("/member/:id", async (req,res)=>{
    try{
        let pid = req.params.id;
        const result = await member.memberById(pid);
        res.status(200).send(result);
    }
    catch(error){
        console.log(error);
    }
})

//get member name by pid
app.get("/member/name/:id", async (req, res) => {
    try{
        let pid = req.params.id;
        //console.log(pid);
        const result = await member.mNameById(pid);
        res.status(200).send(result);
    }
    catch(error){
        console.log(error);
    }
})

//insert new member to project
app.post("/member/add", async (req, res) => {
    try{
        let body = req.body;
        const result = await project.memberInsert(body);
        res.status(201).send(result);
    }
    catch(error){
        console.log(error);
    }
})

//delete member by id
app.delete("/member/delete/:id", async(req, res) => {
    try{
        let pid = req.params.id;
        const result = await member.mDeleteById(pid);
        res.status(202).send(result);
    }
    catch(error){
        console.log(error)
    }
})

/* ------------------------- CHAT.JS ------------------------- */ 
//chat insert
app.post("/chat", async (req, res) => {
    try{
        let body = req.body;
        //console.log(body);
        const result = await chat.createNewChat(body);
        res.status(201).send(result);
    }
    catch(error){
        console.log(error);
    }
})

//get last chat order
app.get("/chat/:id", async (req, res) => {
    try{
        let sender_uid = req.params.id;
        const result = await chat.getLastChatOrderBy(sender_uid);
        res.status(200).send(result);
    }
    catch(error){
        console.log(error);
    }
})

//get last chat content
app.get("/chatHistory/", async (req, res) => {
    try{
        const result = await chat.getLastChatContent();
        res.status(200).send(result);
    }
    catch(error){
        console.log(error);
    }
})

//get the last ten chat activity
//if use /chat/history it conflict with previous code, the one above
app.get("/history", async (req, res) => {
    try{
        const result = await chat.getLastTenChat();
        res.status(200).send(result);
    }
    catch(error){
        console.log(error);
    }
})

/* ------------------------- TASK.JS ------------------------- */ 
//Get
app.get('/procast/task/:pid/:tid', async (req, res)=>{
    try{
        const pid = req.params.pid;
        const tid = req.params.tid;

        const result = await task.getTaskById(pid, tid)

        res.status(200).send(result)
    }catch(err){
        console.log('api endpoint error: '+err);
    }
})


app.get('/procast/task/status/total/:pid', async (req, res)=>{
    try{
        const pid = req.params.pid;

        const result = await task.getTotalTask(pid)

        res.status(200).send(result)
    }catch(err){
        console.log('api endpoint error: '+err);
    }
})


app.get('/procast/task/status/total/complete/:pid', async (req, res)=>{
    try{
        const pid = req.params.pid;

        const result = await task.getTotalCompleteTask(pid)

        res.status(200).send(result)
    }catch(err){
        console.log('api endpoint error: '+err);
    }
})

app.get('/procast/task/status/total/pending/:pid', async (req, res)=>{
    try{
        const pid = req.params.pid;

        const result = await task.getTotalPendingTask(pid)

        res.status(200).send(result)
    }catch(err){
        console.log('api endpoint error: '+err);
    }
})

app.get('/procast/task/status/total/cancel/:pid', async (req, res)=>{
    try{
        const pid = req.params.pid;

        const result = await task.getTotalCancelTask(pid)

        res.status(200).send(result)
    }catch(err){
        console.log('api endpoint error: '+err);
    }
})


//Post
app.post('/procast/task/create', async (req, res)=>{
    try{
        const data = req.body;
        console.log(data.hasOwnProperty('roleid'))
        if(data.hasOwnProperty('roleid')){
            await task.createNewTask1(data.pid, data.task_name, data.description, data.roleid)            
            const result = await task.getLastTask(data.pid)
            res.status(201).send(result)
        }else{
            await task.createNewTask2(data.pid, data.task_name, data.description)
            const result = await task.getLastTask(data.pid)
            res.status(201).send(result)
        }
    }catch(err){
        console.log('api endpoint error: '+err);
    }
})

//Put 

app.put('/procast/task/update/name', async (req, res)=>{
    try{
        const data = req.body;

        const result = await task.updateTaskNameById(data.pid,data.tid, data.task_name)

        res.status(201).send(result)
    }catch(err){
        console.log('api endpoint error: '+err);
    }
})

app.put('/procast/task/update/description', async (req, res)=>{
    try{
        const data = req.body;

        const result = await task.updateTaskDescriptionById(data.pid,data.tid, data.description)

        res.status(201).send(result)
    }catch(err){
        console.log('api endpoint error: '+err);
    }
})

app.put('/procast/task/update/status', async (req, res)=>{
    try{
        const data = req.body;

        const result = await task.updateTaskStatusById(data.pid,data.tid, data.status)

        res.status(201).send(result)
    }catch(err){
        console.log('api endpoint error: '+err);
    }
})

app.put('/procast/task/update/file', async (req, res)=>{
    try{
        const data = req.body;

        const result = await task.updateTaskFileById(data.pid,data.tid, data.file)

        res.status(201).send(result)
    }catch(err){
        console.log('api endpoint error: '+err);
    }
})

app.put('/procast/task/update/roleid', async (req, res)=>{
    try{
        const data = req.body;

        const result = await task.updateTaskRoleById(data.pid,data.tid, data.roleid)

        res.status(201).send(result)
    }catch(err){
        console.log('api endpoint error: '+err);
    }
})

app.put('/procast/task/update/uid', async (req, res)=>{
    try{
        const data = req.body;

        const result = await task.updateTaskUserById(data.pid,data.tid, data.uid)

        res.status(201).send(result)
    }catch(err){
        console.log('api endpoint error: '+err);
    }
})

//Delete
app.delete('/procast/task/byName', async (req, res)=>{
    try{
        const data = req.body;

        const result = await task.getTaskIdByName(data.pid, data.task_name);
        await task.deleteTaskbyName(data.pid, data.task_name);

        if(result.length > 1) {
            res.status(400).send('There are more than one task having the same name. Please resolve this ambiguity by using "/procast/task/byId" delete request instead.')
        }else{
            res.status(202).send(result)
        }
    }catch(err){
        console.log('api endpoint error: '+err);
    }
})

app.delete('/procast/task/byId', async (req, res)=>{
    try{
        const data = req.body

        const result = await task.getTaskById(data.pid, data.tid)
        await task.deleteTaskById(data.pid, data.tid);

        res.status(202).send(result);
    }catch(err){
        console.log('api endpoint error: '+err);
    }
})

/* ------------------------- COMMENT.JS ------------------------- */ 
//Get
app.get('/procast/comment/:cid', async (req, res) => {
    try{
        const cid = req.params.cid;

        const result = await comment.getCommentById(cid);

        res.status(200).send(result)
    }catch(err){
        console.log('api endpoint error: '+err);
    }
})

//Post
app.post('/procast/comment', async (req, res)=>{
    try{
        const data = req.body
        
        await comment.createNewComment(data.commenter_uid, data.content);
        const result = await comment.getLastComment()

        res.status(201).send(result)
    }catch(err){
        console.log('api endpoint error: '+err);
    }
})

//Delete
app.delete('/procast/comment/', async (req,res)=>{
    try{
        const data = req.body;

        const result = await comment.getCommentById(data.cid)
        await comment.deleteComment(data.cid);

        res.status(202).send(result);
    }
    catch(err){
        console.log('api endpoint error: '+err);
    }
})

/* ------------------------- SERVER ------------------------- */ 

// setup port number and listen
const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
    console.log(`server is runnning on port: ${PORT}`)
})
