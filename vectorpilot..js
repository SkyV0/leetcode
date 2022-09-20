const https = require('https');
const fs = require('fs');
const crypto = require('crypto');

const url = 'https://coderbyte.com/api/challenges/json/age-counting';

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {


  let data = '';


    resp.on('data', (chunk) => {
    data += chunk;
    });


    resp.on('end', () => {
    let json = JSON.parse(data);
    let count = 0;
    let output = '';
    let arr = json.data.split(', ');
    for (let i = 0; i < arr.length; i++) {
        let age = arr[i].split('=')[2];
        if (age === '32') {
            count++;
            output += arr[i].split('=')[1] + '';


        }
    }
    fs.writeFile('output.txt', output, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    const hash = crypto.createHash('sha1');
    hash.update(output);
    console.log(hash.digest('hex'));
    });


}).on("error", (err) => {
    console.log("Error: " + err.message);
  
  console.log(resp);

});// Node.js Write Stream
// In the JavaScript file, write a program to perform a GET request on the route https://coderbyte.com/api/challenges/json/age-counting which contains a data key
//  and the value is a string which contains items in the format: key=STRING, age=INTEGER. 
// Your goal is to count how many items exist that have an age equal to 32. 
// Then you should create a write stream to a file called output.txt and the contents should be the key values (from the json) each on a separate line in the order they appeared in the json file (the file should end with a newline character on its own line). Finally, then output the SHA1 hash of the file.

// Example Input
// {"data":"key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32"}

// File Contents (output.txt)
// IAfpK
// 9snd2

// Example Output
// 7caa78c7180ea52e5193d2b4c22e5e8a9e03b486

// Solutionconst https = require('https');
// const https = require('https');
// const fs = require('fs');
// const crypto = require('crypto');

// const url = 'https://coderbyte.com/api/challenges/json/age-counting';

// https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {


//   let data = '';                                                         // A variable to store the data from the GET request   

//     // A chunk of data has been recieved.

//     resp.on('data', (chunk) => {                                          // When data is received, it is stored in the data variable
//         data += chunk;
//     });

//     // The whole response has been received. Print out the result.

//     resp.on('end', () => {                                                // When all the data has been received, the following code is executed
//         let json = JSON.parse(data);                                      // The data is parsed into a JSON object
//         let count = 0;                                                    // A variable to store the number of times the age is 32
//         let output = '';                                                  // A variable to store the key values
//         for (let i = 0; i < json.data.length; i++) {                      // A for loop to iterate through the data
//             if (json.data[i].age === 32) {                                // If the age is 32, the count is incremented
//                 count++;
//                 output += json.data[i].key + '

// ';                       // The key is added to the output variable
//             }
//         }
//         fs.writeFile('output.txt', output, (err) => {                     // The output variable is written to the output.txt file
//             if (err) throw err;
//             console.log('The file has been saved!');
//         });
//         const hash = crypto.createHash('sha1');                           // A SHA1 hash is created

//     resp.on('data', (chunk) => {
//     data += chunk;
//     });


//     resp.on('end', () => {
//     let json = JSON.parse(data);
//     let count = 0;
//     let output = '';
//     let arr = json.data.split(', ');
//     for (let i = 0; i < arr.length; i++) {
//         let age = arr[i].split('=')[2];
//         if (age === '32') {
//             count++;
//             output += arr[i].split('=')[1] + '

// ';


//         }
//     }
//     fs.writeFile('output.txt', output, (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//     });
//     const hash = crypto.createHash('sha1');
//     hash.update(output);
//     console.log(hash.digest('hex'));
//     });


// }).on("error", (err) => {
//     console.log("Error: " + err.message);
//   console.log(resp);




// });
const https = require('https');
const fs = require('fs');
const crypto = require('crypto');
https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
    function getAgeCount(data) {
        let count = 0;
        let output = '';
        let arr = data.split(', ');
        for (let i = 0; i < arr.length; i++) {
            let age = arr[i].split('=')[2];
            if (age === '32') {
                count++;
                output += arr[i].split('=')[1] + '// ';
            }
        }
        fs.writeFile('output.txt', output, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        const hash = crypto.createHash('sha1');
        hash.update(output);
        console.log(hash.digest('hex'));
    }
    let data = '';
    resp.on('data', (chunk) => {
        data += chunk;
    });
    resp.on('end', () => {
        getAgeCount(data);
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});

// Node.js Write Stream



// In the JavaScript file, write a program to perform a GET request on the route https://coderbyte.com/api/challenges/json/age-counting which contains a data key
//  and the value is a string which contains items in the format: key=STRING, age=INTEGER.
//  Your goal is to count how many items exist that have an age equal to 32.
//  Then you should create a write stream to a file called output.txt and the contents should be the key values (from the json) each on a separate line in the order they appeared in the json file (the file should end with a newline character on its own line).
//  Finally, then output the SHA1 hash of the file.

// Example Input
// {"data":"key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32"}

// File Contents (output.txt)
// IAfpK
// 9snd2

// Example Output
// 7caa78c7180ea52e5193d2b4c22e5e8a9e03b486

// const https = require('https');
// const fs = require('fs');
// const crypto = require('crypto');

// const url = 'https://coderbyte.com/api/challenges/json/age-counting';

// https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {


//   let data = '';                                                         // A variable to store the data from the GET request

//     // A chunk of data has been recieved.

//     resp.on('data', (chunk) => {                                          // When data is received, it is stored in the data variable
//         data += chunk;
//     });

//     // The whole response has been received. Print out the result.

//     resp.on('end', () => {                                                // When all the data has been received, the following code is executed
//         let json = JSON.parse(data);                                      // The data is parsed into a JSON object
//         let count = 0;                                                    // A variable to store the number of times the age is 32
//         let output = '';                                                  // A variable to store the key values
//         for (let i = 0; i < json.data.length; i++) {                      // A for loop to iterate through the data
//             if (json.data[i].age === 32) {                                // If the age is 32, the count is incremented
//                 count++;
//                 output += json.data[i].key + '

// ';                       // The key is added to the output variable
//             }
//         }
//         fs.writeFile('output.txt', output, (err) => {                     // The output variable is written to the output.txt file
//             if (err) throw err;
//             console.log('The file has been saved!');
//         });
//         const hash = crypto.createHash('sha1');                           // A SHA1 hash is created
//         hash.update(output);                                              // The output variable is added to the hash
//         console.log(hash.digest('hex'));                                  // The hash is outputted
//     });

// }).on("error", (err) => {
//     console.log("Error: " + err.message);
//console.log (resp(readline()));

// });

// Node.js Write Stream
    // let x =[], y =[];
    // strArr.forEach((pos) => {
    // x.push(Number(pos.replace(‘(‘,”).replace(‘)’,”).split(‘,’)[0]));
    // y.push(Number(pos.replace(‘(‘,”).replace(‘)’,”).split(‘,’)[1]));
    // });
    // const setX = new Set(x);
    // const setY = new Set(y);
    // let flag = true;
    // let resp = '';
    // for(let i=0; i < strArr.length; i++) {
    // for(let j=1; j < strArr.length; j++) {
    // if(flag && (x[j]-x[i] === y[j]-y[i] || x[i]===x[j] || y[i]===y[j])) {
    // resp = (${x[i]},${y[i]});
    // flag = false;
    // }
    // }
    // }
    // if(x.length === setX && x.length === setY && !resp.length) {
    // return true;
    // } else{
    // return resp;
    // }
    // }
    // console.log(getAgeCount(readline()));

const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  let {statusCode} = resp
  let contentType = resp.headers['content-type']
  resp.setEncoding('utf-8')
  let data = '';

  // parse json data here...
  resp.on('data', (d) => {
    data += [d]
  })

    resp.on('end', () => {
    let parsedData = data.split(",")
    .filter(data =>!data.indexOf(" age="))
    .map(data => data.replace(" age=",""))
    .map(data => parseInt(data))
    .filter(data => {
     return (data >= 50);
    }).length
    console.log(parsedData);
  })
  resp.on("error", (e) => {
    console.log("error", e)
  })

  console.log(resp);

});