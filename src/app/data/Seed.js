const { DatabaseSync } = require("node:sqlite");

const mysql=require(mysql);
const db= mysql.creatConnection({
    host:"localhost",
    user:"root",
    password:"a8QSNhjdog2p",
    Database:"verceldb"

});

db.connect(err=>{
    if(err){
        console.error("error connecting database",err)
    }
    else{    console.log("connected to database succesfully")}

});
module.exports=seed;