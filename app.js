const http = require('http');
const port = 3000; //change to whatever port you wanna
const fs = require('fs'); //require file system
const server = http.createServer(function(request, response){
    response.writeHead(200, { 'Content-Type' : 'text/html' }); //200 means success message
    fs.readFile('index.html',function(err, data){
        if(err){
            response.writeHead(404);
            response.write('Page or file not found!');
        } else{
            response.write(data);
        }
        response.end();
    });
}); 

server.listen(port, function(err){
    if(err){
        console.log('Server failed to activated ther\'an error! ', err);
    } else{
        console.log('Server is listening to the port ', port)
    }
});