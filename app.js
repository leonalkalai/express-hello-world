const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


const {
  numberToInteger,
  totalMem,
  bytesToMegabytes,
  bytesToGigabytes
} = require('./utils.js');

const props = {
  'totalMem': totalMem,
  'bytesToMegabytes': bytesToMegabytes,
  'bytesToGigabytes': bytesToGigabytes
};

// const displayTotalMemory = (prop) => {
//   const result = () => {
//     if (prop === 'totalMem') {
//       const memValue = props[prop]();
//       return `${memValue} bytes`;
//     } else {
//       const memValue = props[prop] ? numberToInteger(props[prop]()) : 'Unknown';
//       return `${memValue} ${(prop === 'bytesToMegabytes' ? 'mega' : 'giga')}bytes`;
//     }
//   }
//   return `Total Memory is ${result()}`;
// };

const displayTotalMemory = (prop) => {
  const result = () => (prop === 'totalMem')  
    ? `${props[prop]()} <span class="bytes">bytes</span>` 
    : `${numberToInteger(props[prop]())} <span class="bytes">${prop === 'bytesToMegabytes' ? 'mega' : 'giga'}bytes</span>`;
  return `Total Memory is: <p>${result()}</p>`;
};


module.exports = {
  displayTotalMemory
}

const {
  displayMemoryBytes,
  displayMemoryMegaBytes,
  displayMemoryGigaBytes
} = require('./memory.js');

const {fullName} = require('./fullNameModule.js');

const firstName = 'Leon';
const lastName = 'Kountouras';

const fullname = fullName(firstName, lastName);

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
      p{
       background-color:#7BD0F2;
       padding:25px;
      }
      span{
       background-color:#fff;
       color:#49B4E5;
       padding:25px;
      }
      span.bytes{
       background-color:#DEDFDA;
       color:#2E327A;
       padding:25px;
      }
    </style>
  </head>
  <body>
    <section>
      <h1>This is nodej test of: ${fullname}</h1>
      <div>${bytes}</div>
      <div>${megabytes}</div>
      <div>${gigabytes}</div>
    </section>
  </body>
</html>
`
