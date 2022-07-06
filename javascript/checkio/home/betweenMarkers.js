const {equal} = require("assert");

function betweenMarkers(text, begin, end) {
    //Test if text contains begin and end.
    if (!text.includes(begin) && !text.includes(end)) {
        return text;
        //Test if end comes before begin.
    } else if (text.indexOf(begin[0]) > text.indexOf(end[0])) {
        return '';
        //Test if text only contains end
    } else if (!text.includes(begin) && text.includes(end)) {
        return text.split(end)[0].trim();
        //Test if text only contains begin
    } else if (text.includes(begin) && !text.includes(end)) {
        return text.split(begin)[1].trim();
    } else {
        //Split text on begin then split the result on end
        let firstSplit = text.split(begin)[1];
        return firstSplit.split(end)[0].trim();
    }
}


console.log('Example:')
console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
// equal(betweenMarkers("<head><title>My new site</title></head>",
//     "<title>", "</title>"), 'My new site')
// equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
// equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
// equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
// equal(betweenMarkers('No <hi>', '>', '<'), '')
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");