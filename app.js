
var express = require("express"),
    app = express();
    
var cors = require("cors");

app.use(cors());

var result = {};    

app.use(function(req, res) {
    var agentString = req.headers["user-agent"];
    
    result.ipaddress = req.ip.slice(7, req.ip.length);
    result.language = req.headers["accept-language"].slice(0, 5);
    result.software = agentString.slice(agentString.indexOf("(") + 1, agentString.indexOf(")"));
    res.json(result);
});

app.listen(process.env.PORT);