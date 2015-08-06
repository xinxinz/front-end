function route(handle,pathname,response,postData){
	console.log("About to route a request for:" + pathname);
	if (typeof handle[pathname] ==='function') {
		return handle[pathname](response,postData);
	}else{
		response.writeHead(200,{"Content-type":"text-plain"});
		response.write("404 Not found");
		response.end();
	}
	
}

exports.route=route;