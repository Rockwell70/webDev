const querystring = require('querystring');
const { stringify } = require("nodemon/lib/utils");

const url = 'https://www.example.com/p/a/t/h?course=node&lesson=http';

const queryToParse = url.split('?')[1];

// parse query in to key:value pairs
const parsedQuery = querystring.parse(queryToParse);

parsedQuery.exercise = 'querystring';

// Rebuild query string from object
const modifiedQueryString = querystring.stringify(parsedQuery);


console.log(modifiedQueryString);