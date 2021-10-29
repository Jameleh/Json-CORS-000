# Json-CORS-000
Create and run a web application that issues cross-domain headers in response to any request that returns a JSON object along the / result4 / route with the following properties:
A. message with value: itmo308556


B. x-result with a value equal to the value of the x-test header from the request.
B. x-body with a value equal to the value of the request body.

Those. the validating script should receive JSON of the form {"message": "goss", "x-result": "yyyyy", "x-body": "zzzzz"}

This should return the Content-Type header with the value application / json

The x-test header must be allowed in the Access-Control-Allow-Headers response header.

The application must allow all CORS methods and respond to them in the same way.

Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: x-test, Content-Type, Accept, Access-Control-Allow-Headers

As in the previous tasks, all routes must end with a slash.
