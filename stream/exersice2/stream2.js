const http = require('http');
const https = require('https');
const { Transform } = require('stream');
const fs = require('fs')

const options = {
  method: 'GET',
  hostname: 'exercisedb.p.rapidapi.com',
  path: '/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'fc44765e47msh1246277edb76b84p18344fjsnd504c6efce67',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

const request = https.request(options, (response) => {
  const transformed = new Transform({
    transform(chunk, encoding, callback) {
      const transformedChunk = chunk.toString().toUpperCase();
      callback(null, transformedChunk);
    }
  });

  const writeStream = fs.createWriteStream('output.txt', 'utf-8');
  response.pipe(transformed).pipe(writeStream);
});

request.on('error', (error) => {
  console.error(error);
});

request.end();
