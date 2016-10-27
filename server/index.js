var express = require('express');
var wagner = require('wagner-core');

require('./models')(wagner);

var app = express();

app.use(require('morgan')());

app.use('/api/v1', require('./api')(wagner));

// Serve up static HTML pages from the file system.
// For instance, '/6-examples/hello-http.html' in
// the browser will show the '../6-examples/hello-http.html'
// file.
app.use(express.static('../client', { maxAge: 4 * 60 * 60 * 1000 /* 2hrs */ }));

app.listen(3000);
console.log("Listening on port 3000!");
