//{"ipaddress":"94.142.173.221","language":"en-GB","software":"Windows NT 6.1"}

var express = require("express"),
    app = express();

var result = {};    

app.use(function(req, res) {
    var agentString = req.headers["user-agent"];
    
    result.ipaddress = req.ip.slice(7, req.ip.length);
    result.language = req.headers["accept-language"].slice(0, 5);
    result.software = agentString.slice(agentString.indexOf("(") + 1, agentString.indexOf(")"));
    
    res.send(result);
});

app.listen(process.env.PORT);