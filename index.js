var express = require('express');

var http = require('http');

var server = express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/*
server.post('/', function (req, res) {
    res.status(200).json({ok: "true", "attachments": [
        {
            "fallback": "Required plain-text summary of the attachment.",
            "color": "#36a64f",
            "title": "Slack API Documentation",
            "title_link": "https://api.slack.com/",
            "footer": "Slack API",
            "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
            "ts": 123456789
        }
    ]});
});*/

server.post('/', upload.array(), function (req, res) {
    console.log(req);    
    //res.contentType('application/json');
    res.status(200).json(req);

    /*
    var regex = /T20\d{6}\.\d{4}/g;
    var str = req.body;
    JSON.stringify(str);
    console.log(str);
    var regexArray = str.match(regex);
    console.log(regexArray);
    if(regexArray){
        for(var i=0; j=regexArray.length,i<j; i++){
            res.send("<https://ww4.autotask.net/Autotask/AutotaskExtend/ExecuteCommand.aspx?Code=OpenTicketDetail&TicketNumber=%s|%s>",  regexArray[i], regexArray[i]);
        }
    } */
});

/*
    var regex = /T20\d{6}\.\d{4}/g;
    var str = session.message.text;
    var regexArray = str.match(regex);
    if(regexArray){
        for(var i=0; j=regexArray.length,i<j; i++){
            session.send("<https://ww4.autotask.net/Autotask/AutotaskExtend/ExecuteCommand.aspx?Code=OpenTicketDetail&TicketNumber=%s|%s>",  regexArray[i], regexArray[i]);
        }
    } 
    */

server.post('/jee', function (req, res) {   
    res.status(200).json({
        "attachments": [
            {
                "fallback": "Required plain-text summary of the attachment.",
                "color": "#36a64f",
                "title": "Slack API Documentation",
                "title_link": "https://api.slack.com/",
                "footer": "Slack API",
                "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
                "ts": 123456789
            }
        ]
    });
});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);


