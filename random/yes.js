const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
let data = '';
resp.on(function, 'data','base64', (chunk) => {
data += chunk;
}
);
// count how many items exist that have an age equal to 32.
resp.on(function,'end', () => {     

    