const fs = require('fs');
fs.writeFileSync('./textfile.txt',"HelLo word")
fs.copyFileSync('./textfile.txt','./copytext.txt')
fs.renameSync('textfile.txt','textfile1.txt')
fs.readdir('.', (err, files) => {
    if (err) throw err;
  
    console.log('Files in current directory:');
    files.forEach(file => {
      console.log(file);
    });
  });