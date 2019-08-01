var fs =  require('fs'); // b/c module fs is not in a folder with current project

// reading data from file.txt
 var text = fs.readFileSync('./song.txt',{encoding: 'utf8'});
 console.log(text);

 // writing data from file
 fs.writeFileSync('./music.txt',"Hello");