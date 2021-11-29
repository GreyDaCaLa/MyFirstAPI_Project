// MySql error fix, went to my sql and ran folloring 3 lines to allow connections
// use bestbuy;
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
// flush privileges;



const { Query } = require("../models/model");



const allGame = async () => {
    return Query("select * from game order by gameID desc");
};

const oneGame = async (id) =>{
    return Query("select * from game where GameID =?",[id]);
};

const addGame = async (body)=>{
    return Query("insert into game set ?",[body]);
};

const updateGame= async (body,id)=>{
    return Query("update game set ? where GameID = ?",[body,id]);
};

const removeGame = async (id) => {
    return Query(`delete from game where GameID = ?`, [id]);
};

const allGameEventLog = async () => {
    return Query("select * from EventLog order by eventlogID desc");
};

const oneGameEventLog = async (id) => {
    return Query("select * from eventlog where eventlogID =?",[id]);
};

const addGameEventLog = async (log) => {
    return Query("insert into eventlog set ?",[log]);
};



module.exports = {
    allGame,
    oneGame,
    addGame,
    updateGame,
    removeGame,
    allGameEventLog,
    oneGameEventLog,
    addGameEventLog
}