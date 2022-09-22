const https = require('https');
const fs = require('fs');

const crypto = require('crypto');

 let url = 'https://coderbyte.com/api/challenges/json/age-counting'
 
 https.get(url,(res) => {
     let data = "";
 
  res.on("data", (chunk) => {
      data += chunk;
  });

  res.on("end", () => {
      try {
          let json = JSON.parse(data);
          let count = 0;                                                    // A variable to store the number of times the age is 32
          let output = '';                                                  // A variable to store the key values
     for (let i = 0; i < json.data.length; i++) {                      // A for loop to iterate through the data
          if (json.data[i].age === 32) {                                // If the age is 32, the count is incremented
               count++;
     output += json.data[i].key + ' ';                       // The key is added to the output variable
              }
             }
      } catch (error) {
          console.error(error.message);
      };
  },
  fs.writeFile('output.txt', output, (err) => {                     // The output variable is written to the output.txt file
      if (err) throw err;
     console.log('The file has been saved!');
const hash = crypto.createHash('sha1');                           // A SHA1 hash is created
hash.update(output);                                              // The output variable is added to the hash
 console.log(hash.digest('hex'));                                  // The hash is outputted

}).on("error", (err) => {
console.log("Error: " + err.message);

console.log (resp(readline()));

})
console.log(data);
console.log(statusCode);
console.log(contentType);
 })