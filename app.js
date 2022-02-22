const express = require("express");
const bodyparser = require("body-parser");
const app = express();

var errorMessage="Please Enter Good Operator";
app.use(bodyparser.urlencoded({extended: true}));

app.get("/" , (req , res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req,res){
    var num1 = Number(req.body.no1);
    var num2 = Number(req.body.no2);
    var oper = req.body.operator;

    function calculate(no1, no2, operator)
    {
        var result = 0;
        if(operator == '+')
        {
            result = no1 + no2;
            res.send("Result="+result);
        }
        else if(operator == '-'){
            result = no1 - no2;
            res.send("Result="+result);
        }
        else if(operator == '*'){
            result = no1 * no2;
            res.send("Result="+result);
        }
        else if(operator == '/'){
            result = no1 / no2;
            res.send("Result="+result);
        }
        else{
            res.send(errorMessage);
        }
    }

    calculate(num1, num2, oper);
})

app.listen(4000 , (res)=>{ 
    console.log('> Server is up and running on port : ' + 4000)
})