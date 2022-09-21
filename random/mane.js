const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
const fs = require('fs'); 
const data = ""; 
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
    temp = arr[i -1].slice(4,10);
    tempArray.push(temp);
    }
    }
// parse the data which contains a data key and the value is a string which contains items in the format: key=STRING, age=INTEGER. Your goal is to count how many items exist that have an age equal to 32. 
fs.writeFile('output.txt', data, (err) => { 
if (err) throw err; 
console.log('The file has been saved!'); 
}
);
// Then you should create a write stream to a file called output.txt
let hash = crypto.createHash('sha1'); 
let input = fs.createReadStream('output.txt'); 
input.on('readable', () => { 
let data = input.read(); 
if (data) { hash.update(data); } 
else { 
console.log(hash.digest('hex')); 
}
}
);
}
);
}
);
}


// // count how many items exist that have an age equal to 32.
resp.on('end', () => {

    const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
let data = '';
resp.on('data', (chunk) => {
data += chunk;
}
);