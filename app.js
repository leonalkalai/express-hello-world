const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const displayTotalMemory = (prop) => {
  return `Total Memory in ${
    prop === 'totalMem' ? bytes :
    prop === 'bytesToMegabytes' ? mega :
    prop === 'bytesToGigabytes' ? giga :
    ''
  }bytes`;
};

module.exports = {
  displayTotalMemory
}

const {fullName} = require('./fullNameModule.js');

const firstName = 'Leon';
const lastName = 'Kountouras';

const fullname = fullName(firstName, lastName);

const {
  displayMemoryBytes,
  displayMemoryMegaBytes,
  displayMemoryGigaBytes
} = require('./memory.js');

const bytes = displayMemoryBytes;
const megabytes = displayMemoryMegaBytes;
const gigabytes = displayMemoryGigaBytes;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>This is nodejs</title>
    <script>
      setTimeout(() => {
        
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      <h1>This is nodej test of: ${fullname}</h1>
      <p> ${bytes} </p>
      <p> ${megabytes} </p>
      <p> ${gigabytes} </p>
    </section>
  </body>
</html>
`
