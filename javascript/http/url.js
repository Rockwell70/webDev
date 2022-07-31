const url = require('url')

const myUrl = new URL('https://static-assets.codecademy.com/Courses/Learn-Node/http/data.json')

console.log(myUrl.host)
console.log(myUrl.pathname)