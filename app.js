const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const { argv } = require('node:process');
const {exportArgs} = require('./args.js');
const version = process.argv[2];
const displayArgs = version === 'leon'? exportArgs():'';
 
const {
  numberToInteger,
  totalMem,
  bytesToMegabytes,
  bytesToGigabytes
} = require('./utils.js');

const memprops = {
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
    ? `${memprops[prop]()} <span class="bytes">bytes</span>` 
    : `${numberToInteger(memprops[prop]())} <span class="bytes">${prop === 'bytesToMegabytes' ? 'mega' : 'giga'}bytes</span>`;
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

const {
 serverMachine,
 osVersion,
 osUptime,
 userName,
 osType,
 osPlatform,
 serverCpus
} = require('./hardware.js');

const hardwareprops = {
  'serverMachine': serverMachine,
  'osVersion': osVersion,
  'osUptime': osUptime,
  'userName': userName,
  'osType': osType,
  'osPlatform': osPlatform,
  'serverCpus': serverCpus
};

const displayHardwareInfo = (prop) => {
  const result = hardwareprops[prop](); 
  if (typeof result === 'object') {
    const cpus = Object.entries(result)
      .map(([key, value]) => {
        if (typeof value === 'object') {
          const nestedValues = Object.entries(value)
            .map(([nestedKey, nestedValue]) => {
              if (typeof nestedValue === 'object') {
                // For nested objects, create spans for each item
                const nestedSpans = Object.entries(nestedValue)
                  .map(([innerKey, innerValue]) => `<span>${innerKey}: ${innerValue}</span>`)
                  .join('');
                return `<span>${nestedKey}:</span> <span class="green">${nestedSpans}</span>`;
              } else {
                return `<span>${nestedKey}:</span> <span class="green">${nestedValue}</span>`;
              }
            })
            .join(''); // Join the nested spans
          return `<div><span class="blue">${key}:</span>${nestedValues}</div>`;
        } else {
          return `<div><span class="blue">${key}:</span> <span>${value}</span></div>`;
        }
      })
      .join(' '); // Join the entries with a space
    return `<div>${prop}: <p>${cpus}</p></div>`;
  } else {
    return `<p>${prop}: <span class="bytes">${result}</span></p>`;
  }
};



const servermachine = displayHardwareInfo('serverMachine');
const osversion = displayHardwareInfo('osVersion');
const osuptime = displayHardwareInfo('osUptime');
const username = displayHardwareInfo('userName');
const ostype = displayHardwareInfo('osType');
const osplatform = displayHardwareInfo('osPlatform');
const servercpus = displayHardwareInfo('serverCpus');

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
        background: #21232E;
        color:#FFFFFF;
      }
      section {
        border-radius: 1em;
        padding: 1em;    
        margin-right: -50%;
        /* 
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); 
        */
      }
      p{
       width:100%;
       border:2px solid #363A4A;
       background-color:#343848;
       padding:25px; 
      }
      span{
       width:100%;
       display:block;
       border:2px solid #818AFF;
       background-color:#343848;
       color:#fff;
       padding:25px;
       line-height:3em;
      }
      span.bytes{
       background-color:#DEDFDA;
       color:#2E327A;
       padding:25px;
      }
      span.blue{
       background-color:#6268BB;
       color:#fff;
       padding:25px;
      }
      span.green{
       color:#1F7C77;
      }
    </style>
  </head>
  <body>
   <h1>This is nodej test of: ${fullname}</h1>
   <section>
      <h2>hardware</h2>
      <div>${servermachine}</div>
      <div>${osversion}</div>
      <div>${osuptime}</div>
      <div>${username}</div>
      <div>${ostype}</div>
      <div>${osplatform}</div>
      <div>${servercpus}</div>
    </section>
    <section>    
    <section>
      <h2>${fullname}</h2>
      <div>${bytes}</div>
      <div>${megabytes}</div>
      <div>${gigabytes}</div>
    </section>
    <section>
      <h2>${fullname}</h2>
      <div>${displayArgs}</div>
    </section>
  </body>
</html>
`
