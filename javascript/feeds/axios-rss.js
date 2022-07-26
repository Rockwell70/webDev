// const fetch = require('node-fetch');
import fetch from "node-fetch";

const url = 'https://www.axios.com/feeds/feed.rss?format=xml';

async function fetchAndParse() {
  const response = await fetch(url);
  const data = await response.text();
  const parser = new DOMParser();
  const XMLDocument = parser.parseFromString(data, 'text/xml')
  console.log(XMLDocument);
}

fetchAndParse();