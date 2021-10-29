import http from 'http';
const CORS={ 'Access-Control-Allow-Origin': '*' ,
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS' ,
  'Access-Control-Allow-Headers': 'x-test, Content-Type, Accept, Access-Control-Allow-Headers'}
  const server=http.createServer(async(request,response)=>{
        if(request.url==='/result4/'){
            response.writeHead(200,{
                'content-type':'application/json',
                ...CORS
            })
            let body ='';
            
        await  request.on('data', function (data) {
            body += data;
        })
            response.write(JSON.stringify({
                "message": "itmo308556", 
                "x-result":  request.headers['x-test'] , ///equal to the value of the x-test header from the request
               "x-body":  body //a value equal to the value of the request body
            }))
           // console.log( request.headers.x-test);
        }
    response.end()
});
server.listen(4321,()=> {console.log("server is running on 4321 ")});