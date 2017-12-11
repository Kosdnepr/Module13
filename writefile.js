var fs = require('fs');

// write primary content to a file
var content1 = 'First sentence.';
fs.writeFileSync('demo.txt', content1);

// write additional content to a file
var content2 = 'Second sentence.';
fs.appendFileSync('demo.txt', '\n' + content2);


var fileContent = fs.readFileSync('demo.txt', 'utf8');
console.log(fileContent);