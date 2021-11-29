const express = require("express");
const apiRouter = require("./routes/routes");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(apiRouter);


app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.json({errors:{err:err.message}});
})



app.listen( 3000, ()=> console.log("Server API listening on port 3000...") );