var Client = require('nodegears').Client;
_client = new Client('127.0.0.1',4730);

_client.submit('reverse','ASDFASDFASDFfwddddddddd4555555555555234','normal',false,function(data){
    console.log(data.toString('utf8'));
});


