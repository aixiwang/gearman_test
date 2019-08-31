var Worker = require('nodegears').Worker;
_worker = new Worker('127.0.0.1',4730);

_worker.register('reverse',function(_workload,assign){
    
    assign(_workload.toLowerCase());

});


