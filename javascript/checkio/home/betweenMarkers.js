const {equal} = require("assert");

function betweenMarkers(text, begin, end) {
    if (!text.includes(begin && end)) {
        return text;
    }

}

console.log('Example:')
console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
equal(betweenMarkers("<head><title>My new site</title></head>",
    "<title>", "</title>"), 'My new site')
equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
equal(betweenMarkers('No <hi>', '>', '<'), '')
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");