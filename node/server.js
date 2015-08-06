var http = require("http");
var url = require("url");

function start(route,handle){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		var query = url.parse(request.url).query;
		var postData = "";
		console.log("request for " + pathname+ " receive");

		request.setEncoding("utf-8");

		request.addListener("data",function(postDataChunk){
			console.log("*********************receive bit data:"+postDataChunk);
			postData+=postDataChunk;
		});

		request.addListener("end",function(){
			route(handle,pathname,response,postData);
		});
		
	}
	http.createServer(onRequest).listen(9000);
	console.log("server start")
}

exports.start=start;
