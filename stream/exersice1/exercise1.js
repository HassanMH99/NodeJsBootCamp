const fs = require('fs');
const {Transform} = require('stream')


const readStream = fs.createReadStream('input.txt','utf-8')
const uppercasetransform = new Transform({
    transform(chunk,encode,callback){
        const transformchunk = chunk.toString().toUpperCase();
        callback(null,transformchunk);
    }
});
const writeStream = fs.createWriteStream('output.txt','utf-8');

readStream.pipe(uppercasetransform).pipe(writeStream);