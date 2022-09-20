const https = require('https');
const fs = require('fs');
const crypto = require('crypto');
https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
let data = '';
resp.on('data', (chunk) => {
data += chunk;
}
);
// count how many items exist that have an age equal to 32.
resp.on('end', () => {
let json = JSON.parse(data);
// use buffer object to store the data
let buffer = new Buffer.from(json.data);
// convert buffer to string
let str = buffer.toString();
// split the string into an array
let arr = str.split(',');
// count how many items exist that have an age equal to 32.
let count = 0; for (let i = 0; i < arr.length; i++) { if (arr[i] == 32) { count++; } } console.log(count); }); 
});
let hash = crypto.createHash('sha1');

let outputStream = fs.createWriteStream('output.txt');
// input.on('readable', () => {
// let data2 = input.read();
// if (data2)
// hash.update(data2);
// else {
// console.log(hash.digest('hex'));
// }
// }
// );
// }
// );
// }
// ).on("error", (err) => {
// console.log("Error: " + err.message);
// }
// );
outputStream.end();
let input = fs.createReadStream('output.txt');
input.on('readable', () => {
let data = input.read();
if (data) { hash.update(data); }
else {
console.log(hash.digest('hex'));
}

const https = require('https');
https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
let data = '';
resp.on('data', (chunk) => {
data += chunk;
}
);
// count how many items exist that have an age equal to 32.
resp.on('end', () => {
let json = JSON.parse(data);
let arr = json.data.split(', ');
let count = 0;
let temp = "";
let tempArray = [];
for(let i = 0; i < arr.length; i++){
if(arr[i] == "age=32"){
tempArray.push(arr[i - 1]);
}
}
/*for(let j = 0; j < tempArray.length; j++){
console.log(tempArray[j]);
}*/
// Then you should create a write stream to a file called output.txt
const fs = require('fs');
const crypto = require('crypto');
let hash = crypto.createHash('sha1');
let outputStream = fs.createWriteStream('output.txt');
for(let i = 0; i < tempArray.length; i++){
let key = tempArray[i];
outputStream.write(key + '\n', 'base64');
console.log( key);
}
outputStream.end();
let input = fs.createReadStream('output.txt');
input.on('readable', () => {
let data = input.read();
if (data) { hash.update(data); }
else {
console.log(hash.digest('hex'));
}

const https = require('https');
https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
let data = '';
resp.on('data', (chunk) => {
data += chunk;
}
);
// count how many items exist that have an age equal to 32.
resp.on('end', () => {
let json = JSON.parse(data);
let arr = json.data.split(', ');
let count = 0;
let temp = "";
let tempArray = [];
for(let i = 0; i < arr.length; i++){
if(arr[i] == "age=32"){
tempArray.push(arr[i - 1]);
}
}
/*for(let j = 0; j < tempArray.length;