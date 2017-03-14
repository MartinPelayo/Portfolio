'use strict';
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/', function(request, response){
    response.sendFile('/public/index.html', {root: '.'});
});

app.listen(PORT, function(){
    console.log(`server up on ${PORT}`);
});