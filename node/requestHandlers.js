var exec = require("child_process").exec

function start(response,postData){
	console.log("function start is calling");

	// var content = "empty";
	// exec("find /",{ timeout: 10000, maxBuffer: 20000*1024 },function(error,stdout,stderr){
	// 	response.writeHead(200,{"Content-type":"text-plain"});
	// 	response.write(stdout);
	// 	response.end();
	// });
	var body='<!DOCTYPE html>'+
'<html>'+
'<head>'+
	'<meta charset="utf-8">'+
	'<title>'+'</title>'+
'</head>'+
'<body>'+
'<form action="/upload" method="post">'+
	'<textarea name="text" row="20" cols="60">'+'</textarea><br/>'+
	'<input type="submit" value="Submit text" />'+
'</form>'+
'</body>'+
'</html>';
	response.writeHead(200,{"Content-type":"text-plain"});
	response.write(body);
	response.end();
}

function upload(response, postData){
	response.writeHead(200,{"Content-type":"text-plain"});
	response.write("you'v receive :" + querystring.parse(postData).text );
	response.end();
}

exports.start=start;
exports.upload=upload;