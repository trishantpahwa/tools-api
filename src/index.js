const express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');

const string_functions = require('./Routes/string_functions');

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/string-functions', string_functions);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});