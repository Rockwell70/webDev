// const fetch = require('node-fetch');
import fetch from "node-fetch";

//const url = 'https://www.axios.com/feeds/feed.rss?format=xml';
//const url = 'https://api.axios.com/feed/?format=xml';
const url = 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml';
// const url = 'https://www.seattletimes.com/nation-world/feed/?format=xml';

async function fetchAndParse() {
  const response = await fetch(url);
  const data = await response.text();
  const parser = new DOMParser();
  const XMLDocument = parser.parseFromString(data, 'text/xml')
  console.log(XMLDocument);
  // console.log(data)
}

function displayTitles(xml) {
  // HTML element where the results will be displayed
  // the markup contains a ul with an id of "results"
  const listElem = document.getElementById('results');
  // get the article titles
  // each is wrapped in a <title> tag within an <item> tag
  const titles = xml.querySelectorAll('item title');
  // loop over each title in the XML and append its text content to the HTML list
  titles.forEach(title => {
    const listItem = document.createElement('li');
    listItem.innerText = title.textContent;
    listElem.appendChild(listItem);
  });
}

const xml = await fetchAndParse();
displayTitles(xml);

//fetchAndParse();