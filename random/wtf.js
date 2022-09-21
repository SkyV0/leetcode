// // const fs = require('fs');
// // const crypto = require('crypto');
// // const hash = crypto.createHash('sha1');
// // const outputStream = fs.createWriteStream('output.txt');
// // const https = require('https');
// // https.get('https://coderbyte.com/api/challenges/json/age-counting', ( respp, data ) => { 
// //       let json = JSON.parse(data);
// //       let arr = json.data.split(', ');
// //       let count = 0;
// //       let temp = "";
// //       let tempString = [];
// //       for(let i = 0; i < arr.length; i++){
// //             if(str[i].includes("age=32")){
// //                   temp = arr[i].split('=')[1];
// //                   tempString.push(temp);
// //                   tempString.push(temp);
// //                   let targetString = [];
// //                   for(let i = 0; i < tempString.length; i++){
// //                         if(tempString[i] == "age=32"){   
// //                               targetString.push(tempString[i-1]);
// //                         }
// //                   }
// //                   for(let i = 0; i < targetString.length; i++){
// //                         console.log(targetString[i]);
// //                   }
// //                   console.log(targetString.length);
// //                   outputStream.write(targetString);
// //                   outputStream.end();
// //                   const input = fs.createReadStream('output.txt');
// //                   input.on('readable', () => {
// //                         const data = input.read();
// //                         if (data)
// //                               hash.update(data);
// //                         else {
// //                               console.log(hash.digest('hex'));
// //                         }
// //                   }
// //                   );
// //             }
// //       }
// // }
// // ).on("error", (err) => {
// //       console.log("Error: " + err.message);
// // }
// // )
// // // undefined:1
// // // undefined
// // // ^

// // // SyntaxError: Unexpected token u in JSON at position 0
// // //     at JSON.parse (<anonymous>)
// // //     at ClientRequest.<anonymous> (/tmp/888421723/main.js:7:23)
// // //     at Object.onceWrapper (events.js:418:26)
// // //     at ClientRequest.emit (events.js:311:20)
// // //     at HTTPParser.parserOnIncomingClient [as onIncoming] (_http_client.js:603:27)
// // //     at HTTPParser.parserOnHeadersComplete (_http_common.js:119:17)
// // //     at TLSSocket.socketOnData (_http_client.js:476:22)
// // //     at TLSSocket.emit (events.js:311:20)
// // //     at addChunk (_stream_readable.js:294:12)
// // //     at readableAddChunk (_stream_readable.js:275:11)


// // const fs = require('fs');
// // const crypto = require('crypto');
// // const hash = crypto.createHash('sha1');
// // const outputStream = fs.createWriteStream('output.txt');
// // const https = require('https');
// // https.get('https://coderbyte.com/api/challenges/json/age-counting', ( respp, data) => {
// //       let json = JSON.parse(data);
// //       let arr = json.data.split(', ');
// //       let count = 0;
// //       let temp = "";
// //       let tempString = [];
// //       for(let i = 0; i < arr.length; i++){
// //             if(str[i].includes("age=32")){
// //                   temp = arr[i].split('=')[1];
// //                   tempString.push(temp);
// //                   tempString.push(temp);
// //                   let targetString = [];
// //                   for(let i = 0; i < tempString.length; i++){
// //                         if(tempString[i] == "age=32"){
// //                               targetString.push(tempString[i-1]);
// //                         }
// //                   }
// //                   for(let i = 0; i < targetString.length; i++){
// //                         console.log(targetString[i]);
// //                   }
// //                   console.log(targetString.length);
// //                   outputStream.write(targetString);
// //                   outputStream.end();
// //                   const input = fs.createReadStream('output.txt');
// //                   input.on('readable', () => {
// //                         const data = input.read();
// //                         if (data)
// //                               hash.update(data);
// //                         else {
// //                               console.log(hash.digest('hex'));
// //                         }
// //                   }
// //                   );
// //             }
// //       }
// // }
// // ).on("error", (err) => {

// //       console.log("Error: " + err.message);
// // }
// // )

// // Node.js Write Stream
// // In the JavaScript file, write a program to perform a GET request on the route https://coderbyte.com/api/challenges/json/age-counting which contains a data key and the value is a string which contains items in the format: key=STRING, age=INTEGER. Your goal is to count how many items exist that have an age equal to 32. Then you should create a write stream to a file called output.txt and the contents should be the key values (from the json) each on a separate line in the order they appeared in the json file (the file should end with a newline character on its own line). Finally, then output the SHA1 hash of the file.

// // Example Input
// // {"data":"key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32"}

// // File Contents (output.txt)
// // IAfpK
// // 9snd2

// // Example Output
// // 7caa78c7180ea52e5193d2b4c22e5e8a9e03b486
// //solve this error in the code below and have it return an answer similar to the Example Output
// //this is the data at the api {"data":"key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47, key=0Sr4C, age=68, key=CGEqo, age=76, key=IxKVQ, age=79, key=eD221, age=29, key=XZbHV, age=32, key=k1SN5, age=88, key=4SCsU, age=65, key=q3kG6, age=33, key=MGQpf, age=13, key=Kj6xW, age=14, key=tg2VM, age=30, key=WSnCU, age=24, key=f1Vvz, age=46, key=dOS7A, age=72, key=tDojg, age=82, key=nZyJA, age=48, key=R8JTk, age=29, key=005Ot, age=66, key=HHROm, age=12, key=5yzG8, age=51, key=xMJ5D, age=38, key=TXtVu, age=82, key=Hz38B, age=84, key=WfObU, age=27, key=mmqYB, age=14, key=4Z3Ay, age=62, key=x3B0i, age=55, key=QCiQB, age=72, key=zGtmR, age=66, key=nlIN9, age=8, key=hKalB, age=50, key=Na33O, age=17, key=jMeXm, age=15, key=OO2Mc, age=32, key=hhowx, age=34, key=gLMJf, age=60, key=PblX6, age=66, key=8Vm5W, age=22, key=oZKd6, age=88, key=RXNfQ, age=25, key=3yy0p, age=64, key=FrQbL, age=80, key=vlUkk, age=55, key=DP8po, age=80, key=EroX6, age=84, key=3bsll, age=86, key=QhZjA, age=85, key=wm6uc, age=74, key=MC1FM, age=75, key=AMxZr, age=64, key=ee03Q, age=4, key=9fGea, age=41, key=3TE9U, age=74, key=FoSMR, age=13, key=4To0X, age=57, key=5CZY3, age=33, key=qFvKG, age=79, key=W7bUh, age=2, key=htab7, age=15, key=KRyu2, age=77, key=GLkk7, age=80, key=jnXf6, age=51, key=YBTJ9, age=43, key=auL0J, age=30, key=ZHmmd, age=4, key=01iNV, age=7, key=7ldyh, age=55, key=TjXbT, age=88, key=ochyW, age=3, key=lsGXW, age=1, key=5o7Bd, age=45, key=APWEf, age=79, key=LRmKc, age=81, key=uZIoQ, age=12, key=Zf79H, age=42, key=NrpEI, age=6, key=XzYKx, age=22, key=kk0sU, age=62, key=p5uue, age=74, key=WscQQ, age=75, key=tRogh, age=19, key=ur4rW, age=60, key=IkCeS, age=19, key=vtGK4, age=11, key=C87cQ, age=38, key=0qXDb, age=39, key=KtBjN, age=46, key=f2h36, age=3, key=tGzgU, age=38, key=hIrPv, age=0, key=Tq7IX, age=25, key=F4k9K, age=46, key=9duxK, age=17, key=jTHDj, age=68, key=6GHpE, age=1, key=ye9us, age=9, key=eOfZO, age=72, key=I25vO, age=88, key=nqtBH, age=38, key=Dwn6b, age=70, key=4Qkdc, age=37, key=xvOa3, age=77, key=dg4rX, age=30, key=S9YbW, age=73, key=WhQqH, age=22, key=fexMF, age=88, key=Gzr0n, age=16, key=yFfjA, age=73, key=EfAKS, age=88, key=5Enyf, age=12, key=DK3HU, age=25, key=iGEBf, age=13, key=7r5UR, age=27, key=TQx1J, age=33, key=VlFwT, age=26, key=gnEgG, age=10, key=6P8gz, age=3, key=JnQLt, age=14, key=D3WJv, age=58, key=EXPMD, age=66, key=RzIDx, age=17, key=m6oYq, age=46, key=XTKAk, age=78, key=ZPLrJ, age=33, key=pDktp, age=10, key=TE9BG, age=18, key=7IS0l, age=35, key=yMY5X, age=58, key=jniwe, age=29, key=eb7lG, age=6, key=uzaoH, age=2, key=pUQoE, age=64, key=JZcuo, age=20, key=XwKBi, age=73, key=Zv4q9, age=31, key=HMD5T, age=76, key=rA4bI, age=75, key=PAMR7, age=86, key=tb8mz, age=2, key=vPcXk, age=18, key=c0Ixk, age=5, key=nkRrD, age=63, key=ISzFh, age=7, key=kcC1y, age=71, key=6J0WQ, age=27, key=FgiVY, age=72, key=Z8M30, age=50, key=Ep2Br, age=48, key=w9MRR, age=1, key=GI7oe, age=49, key=3ehsB, age=67, key=UW3dX, age=87, key=094dk, age=64, key=6tW4g, age=83, key=dT9IK, age=39, key=AofBp, age=27, key=7flGb, age=71, key=IBDqH, age=18, key=K2qn9, age=60, key=Qe7YJ, age=13, key=jqCHl, age=1, key=3R2IN, age=1, key=oVzfV, age=22, key=3yGCN, age=47, key=DOMm4, age=89, key=7EFRj, age=33, key=t1qsV, age=39, key=CBal1, age=14, key=BC0vr, age=68, key=0yY6L, age=47, key=Z8kX8, age=62, key=5oH1d, age=66, key=w0r3A, age=6, key=Bu8uK, age=55, key=vyqhK, age=35, key=7Zgz6, age=58, key=T573t, age=18, key=Rr4WR, age=48, key=kxnBU, age=39, key=XI3Jo, age=45, key=IAE95, age=43, key=rfSBT, age=59, key=znDPW, age=57, key=mBDDN, age=4, key=2hL0t, age=35, key=MbHM6, age=33, key=bS5oR, age=88, key=Rav2A, age=24, key=aLQO7, age=74, key=QCTUi, age=81, key=0HZlb, age=39, key=zshkO, age=5, key=q5EUd, age=75, key=WwgjN, age=20, key=LzTMa, age=3, key=uumoL, age=32, key=m3LJI, age=80, key=rU10P, age=39, key=gVTQz, age=79, key=wZjna, age=47, key=3d1E0, age=77, key=Ra74M, age=89, key=FJXHG, age=11, key=MckmR, age=37, key=tSqfN, age=2, key=HHkpI, age=40, key=S7rIA, age=34, key=vnpjJ, age=2, key=t8WSa, age=84, key=38fyp, age=11, key=Znot2, age=72, key=OGqoG, age=65, key=7VKiL, age=58, key=UdlEG, age=79, key=BXxIS, age=47, key=eW6F8, age=10, key=GASTN, age=86, key=SP0yy, age=53, key=ysN9w, age=17, key=KVGGz, age=76, key=yhEVk, age=47, key=vvlgV, age=67, key=aIMuS, age=21, key=KcHZk, age=41, key=6n8pa, age=35, key=ADTut, age=3, key=WNJXO, age=37, key=qta1A, age=67, key=cJOTp, age=67, key=1Bgd3, age=71, key=sHepZ, age=67, key=JoMvH, age=65, key=h1gF0, age=53, key=we7hP, age=41, key=Ztl8x, age=8, key=7pkQj, age=43, key=fkBah, age=21, key=FWETS, age=55, key=Gb4IY, age=26, key=U88H6, age=57, key=iExWE, age=8, key=7sl6v, age=8, key=iwI1x, age=9, key=cdKUG, age=60, key=xb127, age=57, key=dqYi8, age=15, key=opO2h, age=80, key=RNux0, age=37, key=cooLT, age=7, key=qhzQn, age=18, key=uowal, age=10, key=YR8Oy, age=17, key=GwEwr, age=15, key=WIXKE, age=53, key=aeem8, age=88, key=UPYoP, age=85, key=IF1pO, age=11, key=R6pUy, age=37, key=vYADh, age=0, key=TIq4k, age=35, key=dCekr, age=56, key=HBbXO, age=84, key=Lo9h5, age=36, key=fqBW3, age=87, key=OQWCL, age=52, key=nlYrf, age=6, key=cUS5f, age=32, key=A5gR0, age=32, key=HpUXl, age=84, key=nOuUT, age=18, key=mfvjr, age=12, key=24FH4, age=13, key=2rQei, age=51, key=EGAAV, age=8, key=Q5ifr, age=50, key=AVpil, age=87, key=vRcjt, age=51, key=G53C3, age=53, key=bsZAz, age=66, key=a8rVi, age=28, key=qPs5m, age=48, key=hF1kt, age=78, key=GIDFA, age=32, key=d2Mg4, age=12, key=EoYwt, age=30, key=DL7zx, age=14, key=lsA6c, age=17, key=ExutD, age=82, key=YOSNP, age=53, key=PEfma, age=49, key=EA8Go, age=18, key=fGTSM, age=60, key=lRf1j, age=13, key=0iJGV, age=50, key=cFCfU, age=5, key=J8an1, age=48, key=dkSlj, age=5"}
// // const fs = require('fs');
// // const crypto = require('crypto');
// // const hash = crypto.createHash('sha1');
// // const outputStream = fs.createWriteStream('output.txt');
// // const https = require('https');
// // https.get('https://coderbyte.com/api/challenges/json/age-counting', (respp, data) => {
// //       let count = 0;
// //       let output = '';
// //       respp.on('data', (chunk) => {
// //          data += chunk;
// //       });
// //       respp.on('end', () => {
// //          let json = JSON.parse(data);
// //          let arr = json.data.split(', ');
// //          for(let i = 0; i < arr.length; i++){
// //                let key = arr[i].split('=')[1];  
// //                let age = arr[i].split('=')[2];
// //                if(age == 32){
// //                   count++;
// //                   output += key + '';
// //                }
// //          }
// //          console.log(count);
// //          outputStream.write(output);
// //          outputStream.end();
// //          const input = fs.createReadStream('output.txt');
// //          input.on('readable', () => {
// //                const data = input.read();
// //                if (data)
// //                   hash.update(data);
// //                else {
// //                   console.log(hash.digest('hex'));
// //                }
// //          });
// //       });
// //    }).on("error", (err) => {
// //       console.log("Error: " + err.message);
// //    }
// // );
// //the above code gives this error undefined:1
// // undefined{"data":"key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47, key=0Sr4C, age=68, key=CGEqo, age=76, key=IxKVQ, age=79, key=eD221, age=29, key=XZbHV, age=32, key=k1SN5, age=88, key=4SCsU, age=65, key=q3kG6, age=33, key=MGQpf, age=13, key=Kj6xW, age=14, key=tg2VM, age=30, key=WSnCU, age=24, key=f1Vvz, age=46, key=dOS7A, age=72, key=tDojg, age=82, key=nZyJA, age=48, key=R8JTk, age=29, key=005Ot, age=66, key=HHROm, age=12, key=5yzG8, age=51, key=xMJ5D, age=38, key=TXtVu, age=82, key=Hz38B, age=84, key=WfObU, age=27, key=mmqYB, age=14, key=4Z3Ay, age=62, key=x3B0i, age=55, key=QCiQB, age=72, key=zGtmR, age=66, key=nlIN9, age=8, key=hKalB, age=50, key=Na33O, age=17, key=jMeXm, age=15, key=OO2Mc, age=32, key=hhowx, age=34, key=gLMJf, age=60, key=PblX6, age=66, key=8Vm5W, age=22, key=oZKd6, age=88, key=RXNfQ, age=25, key=3yy0p, age=64, key=FrQbL, age=80, key=vlUkk, age=55, key=DP8po, age=80, key=EroX6, age=84, key=3bsll, age=86, key=QhZjA, age=85, key=wm6uc, age=74, key=MC1FM, age=75, key=A

// // SyntaxError: Unexpected token u in JSON at position 0
// //     at JSON.parse (<anonymous>)
// //     at IncomingMessage.<anonymous> (/tmp/292167367/main.js:13:26)
// //     at IncomingMessage.emit (events.js:323:22)
// //     at endReadableNT (_stream_readable.js:1204:12)
// //     at processTicksAndRejections (internal/process/task_queues.js:84:21)


// //the above code gives this
// // Then you should create a write stream to a file called output.txt and the contents should be the key values (from the json) each on a separate line in the order they appeared in the json file (the file should end with a newline character on its own line). Finally, then output the SHA1 hash of the file.
// //File Contents (output.txt)
// // IAfpK
// // 9snd2
// // Example Output
// // 7caa78c7180ea52e5193d2b4c22e5e8a9e03b486
// const https = require('https');
// // perform a GET request on the route https://coderbyte.com/api/challenges/json/age-counting which contains a data key and the value is a string which contains items in the format: key=STRING, age=INTEGER.
// https.get('https://coderbyte.com/api/challenges/json/age-counting', (respp, data) => {
//    //Your goal is to count how many items exist that have an age equal to 32.
//    let count = 0;
//    //Then you should create a write stream to a file called output.txt and the contents should be the key values (from the json) each on a separate line in the order they appeared in the json file (the file should end with a newline character on its own line).
//    let output = '';
//    //the data is a stream of data that is coming in from the request that is this {"data":"key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47, key=0Sr4C, age=68, key=CGEqo, age=76, key=IxKVQ, age=79, key=eD221, age=29, key=XZbHV, age=32, key=k1SN5, age=88, key=4SCsU, age=65, key=q3kG6, age=33, key=MGQpf, age=13, key=Kj6xW, age=14, key=tg2VM, age=30, key=WSnCU, age=24, key=f1Vvz, age=46, key=dOS7A, age=72, key=tDojg, age=82, key=nZyJA, age=48, key=R8JTk, age=29, key=005Ot, age=66, key=HHROm, age=12, key=5yzG8, age=51, key=xMJ5D, age=38, key=TXtVu, age=82, key=Hz38B, age=84, key=WfObU, age=27, key=mmqYB, age=14, key=4Z3Ay, age=62, key=x3B0i, age=55, key=QCiQB, age=72, key=zGtmR, age=66, key=nlIN9, age=8, key=hKalB, age=50, key=Na33O, age=17, key=jMeXm, age=15, key=OO2Mc, age=32, key=hhowx, age=34, key=gLMJf, age=60, key=PblX6, age=66, key=8Vm5W, age=22, key=oZKd6, age=88, key=RXNfQ, age=25, key=3yy0p, age=64, key=FrQbL, age=80, key=vlUkk, age=55, key=DP8po, age=80, key=EroX6, age=84, key=3bsll, age=86, key=QhZjA, age=85, key=wm6uc, age=74, key=MC1FM, age=75, key=A
//    //count how many items exist that have an age equal to 32
//    respp.on('data', (data) => {
//       console.log(JSON.parse(data.toString()).data.split(',').filter((item) => item.includes('age=32')).map((item) => item.split('=')[1]).join(''));   
//       // Then you should create a write stream to a file called output.txt and the contents should be the key values (from the json) each on a separate line in the order they appeared in the json file (the file should end with a newline character on its own line). 
//       output += JSON.parse(data.toString()).data.split(',').map((item) => item.split('=')[1]).join(' ');
//       // Finally, then output the SHA1 hash of the file.
//       console.log(output);
//    });
//    //the file should end with a newline character on its own line
//    output += ' ';


// }).on("error", (err) => {
//    console.log("Error: " + err.message);
// }
// );
// //the above code gives this
// // undefined:1
// // {"data":"key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47, key=0Sr4C, age=68, key=CGEqo, age=76, key=IxKVQ, age=79, key=eD221, age=29, key=XZbHV, age=32, key=k1SN5, age=88, key=4SCsU, age=65, key=q3kG6, age=33, key=MGQpf, age=13, key=Kj6xW, age=14, key=tg2VM, age=30, key=WSnCU, age=24, key=f1Vvz, age=46, key=dOS7A, age=72, key=tDojg, age=82, key=nZyJA, age=48, key=R8JTk, age=29, key=005Ot, age=66, key=HHROm, age=12, key=5yzG8, age=51, key=xMJ5D, age=38, key=TXtVu, age=82, key=Hz38B, age=84, key=WfObU, age=27, key=mmqYB, age=14, key=4Z3Ay, age=62, key=x3B0i, age=55, key=QCiQB, age=72, key=zGtmR, age=66, key=nlIN9, age=8, key=hKalB, age=50, key=Na33O, age=17, key=jMeXm, age=15, key=OO2Mc, age=32, key=hhowx, age=34, key=gLMJf, age=60, key=PblX6, age=66, key=8Vm5W, age=22, key=oZKd6, age=88, k
                                                                                                                                                                                                          

// // SyntaxError: Unexpected end of JSON input
// //     at JSON.parse (<anonymous>)
// //     at IncomingMessage.<anonymous> (/tmp/366928066/main.js:11:24)
// //     at IncomingMessage.emit (events.js:311:20)
// //     at IncomingMessage.Readable.read (_stream_readable.js:512:10)
// //     at flow (_stream_readable.js:989:34)
// //     at respume_ (_stream_readable.js:970:3)
// //     at processTicksAndRejections (internal/process/task_queues.js:84:21)

// //fix the code so that it works as expected
// // const https = require('https');
// // // perform a GET request on the route https://coderbyte.com/api/challenges/json/age-counting which contains a data key and the value is a string which contains items in the format: key=STRING, age=INTEGER.
// // https.get('https://coderbyte.com/api/challenges/json/age-counting', (respp, data) => {
// //    //Your goal is to count how many items exist that have an age equal to 32.
// //    let count = 0;
// //    let output = '';
// //    respp.on('data', (data) => {
// //       JSON.parse(data.toString()).data.split(',').forEach((item) => {
// //          if (item.includes('age=32')) {
// //             count++;
// //          }
// //          output += item.split('=')[1] + ' ';
// //       });
// //    }
// //    );
// //    respp.on('end', () => {
// //       console.log(count);
// //       console.log(output);
// //    }
// //    );
// // }).on("error", (err) => {
// //    console.log("Error: " + err.message);
// // }
// // );
// const https = require('https');

// https.get('https://coderbyte.com/api/challenges/json/age-counting', (respp) => {
  
//   let data = '';

//   // parse json data here...
  
//   console.log(respp);

// });
// //constraints
// //1. the data key will always exist in the respponse
// //2. the value of the data key will always be a string
// //3.the string will always contain items in the format: key=STRING, age=INTEGER
// //4.the string will always contain at least one item
// //5.the string will always contain at least one item that has an age equal to 32
// //6.fix the code above so its output matches the example output Example Output 7caa78c7180ea52e5193d2b4c22e5e8a9e03b486
//     //7.respponse to this data at the api 'https://coderbyte.com/api/challenges/json/age-counting' should contains a data key and the value is a string which contains items in the format: key=STRING, age=INTEGER.
//       //8.the respponse is to count how many items exist that have an age equal to 32.
//       //9.Then you should create a write stream to a file called output.txt and the contents should be the key values (from the json) each on a separate line in the order they appeared in the json file (the file should end with a newline character on its own line).
//       //10.Finally, then output the SHA1 hash of the file.
//    //11.the file should end with a newline character on its own line
//    //12.define output and  the contents should be the key values (from the json) each on a separate line in the order they appeared in the json file (the file should end with a newline character on its own line).
//    //13.Your goal is to count how many items exist that have an age equal to 32.
//    //14. the output should be a hash of the file
//    //the code below must meet all constraints listed above numbered 1-14


//    // const https = require('https');
//    // const fs = require('fs');
//    // const crypto = require('crypto');
//    // const hash = crypto.createHash('sha1');
//    // const outputStream = fs.createWriteStream('output.txt');
//    // https.get('https://coderbyte.com/api/challenges/json/age-counting', (respp, count) => {
//    //    let data = '';
//    //    let output = '';
//    //    count = 0;
//    //    respp.on('data', (chunk) => {
//    //       data += chunk;
//    //    }
//    //    );
//    //    //return the correct hash respponse for all age that is equal to 32 and account for "stdout error" and "stderr error" and validate the answer
//    //    respp.on('end', () => {
//    //       JSON.parse(data).data.split(',').forEach((item) => {
//    //          if (item.includes('age=32')) {
//    //             count++;
//    //          }
//    //          output += item.split('=')[1] + ' ';
//    //       });
//    //       outputStream.write(output);
//    //       outputStream.end();
//    //       outputStream.on('finish', () => {
//    //          const hash = crypto.createHash('sha1');
//    //          const stream = fs.createReadStream('output.txt');
//    //          stream.on('data', (chunk) => {
//    //             hash.update(chunk);
//    //          }
//    //          );
//    //          stream.on('end', () => {
//    //             console.log(hash.digest('hex'));
//    //          }
//    //          );
//    //       }
//    //       );
//    //    }
//    //    );
//    // }).on("error", (err) => {
//    //    console.log("Error: " + err.message);
//    // }
//    // );
//     //content-length: 1624
// // decode content-type: application/x-www-form-urlencoded; charset=UTF-8
// //use the correct request headers :authority: coderbyte.com
// // :method: POST
// // :path: /backend/requests/editor/submit_challenge.php
// // :scheme: https
// // accept: */*
// // accept-encoding: gzip, deflate, br
// // accept-language: en-US,en;q=0.9
// // content-length: 2090
// // content-type: application/x-www-form-urlencoded; charset=UTF-8
// // cookie: _fbp=fb.1.1660234844195.846819506; _ga=GA1.2.336310260.1660234844; _gac_UA-25530908-2=1.1660234844.EAIaIQobChMI_7Cy2Ji_-QIVATI4Ch2ahww_EAAYASAAEgIPpfD_BwE; _gcl_au=1.1.1389069185.1660234844; hubspotutk=4abc6f5116cf3aaea9a756725477afca; _gcl_aw=GCL.1660234845.EAIaIQobChMI_7Cy2Ji_-QIVATI4Ch2ahww_EAAYASAAEgIPpfD_BwE; messagesUtk=7c3b8f28318f4ffe8cc251fb000c069a; __stripe_mid=71275811-9959-43cf-847d-39028cce443f07fe09; _gid=GA1.2.1051978307.1663545920; _hp2_id.1436677478=%7B%22userId%22%3A%226496028253193159%22%2C%22pageviewId%22%3A%226526861996462669%22%2C%22sessionId%22%3A%22296787283694117%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%224.0%22%7D; _clck=1lr7bqa|1|f50|0; __hssrc=1; CoderbyteSessionKey=SEBPOhxBJesz07EPg3RD; _uetsid=6967a000383c11edabb7cff1f05db585; _uetvid=8ccacb60199111ed8f598d298917e5b7; _hp2_id.1391399697=%7B%22userId%22%3A%226238398390151253%22%2C%22pageviewId%22%3A%228754806864284413%22%2C%22sessionId%22%3A%228491469949220837%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%224.0%22%7D; _clsk=82cxte|1663607093788|4|1|a.clarity.ms/collect; PHPSESSID=2n6jlmisk461na7c761rcfovqmvhejaf; __hstc=112823387.4abc6f5116cf3aaea9a756725477afca.1660234844736.1663606764246.1663612199999.3
// // origin: https://coderbyte.com
// // referer: https://coderbyte.com/editor/languagespecific:Node.js%20Write%20Stream?previewMode=true
// // sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"
// // sec-ch-ua-mobile: ?0
// // sec-ch-ua-platform: "Windows"
// // sec-fetch-dest: empty
// // sec-fetch-mode: cors
// // sec-fetch-site: same-origin
// // user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36
// // x-requested-with: XMLHttpRequest
// const https = require('https');
// const fs = require('fs');
// const crypto = require('crypto');
// const hash = crypto.createHash('sha1');
// const outputStream = fs.createWriteStream('output.txt');
// const req = https.request (resp) => {
//    let data = '';
//    let output = '';
//    let count = 0;
//    resp.on('data', (chunk) => {
//       data += chunk;
//    }
//    );
//    resp.on('end', () => {
//       JSON.parse(data).data.split(',').forEach((item) => {
//          if (item.includes('age=32')) {
//             count++;
//          }
//          output += item.split('=')[1] + ' ';
//       });
//       outputStream.write(output);
//       outputStream.end();
//       outputStream.on('finish', () => {
//          const stream = fs.createReadStream('output.txt');
//          stream.on('data', (chunk) => {
//             hash.update(chunk);
//          }
//          );
//          stream.on('end', () => {
//             console.log(hash.digest('hex'));
//          }
//          );
//       }
//       );
//    }
//    );
// }).on("error", (err) => {
//    console.log("Error: " + err.message);
// }
// );

// resp.on('data', (chunk) => {
//    data += chunk;
// }


// );
// resp.on('end', () => {
//    JSON.parse(data).data.split(',').forEach((item) => {
      if (item.includes('age=32')) {
         count++;
      }
      output += item.split('=')[1] + ' ';
   });
   outputStream.write(output);
   outputStream.end();
   outputStream.on('finish', () => {
      const stream = fs.createReadStream('output.txt');
      stream.on('data', (chunk) => {
         hash.update(chunk);
      }
      );
      stream.on('end', () => {
         console.log(hash.digest('hex'));
         console.log(count);
      }
      );
   }
   );

}).on("error", (err) => {
console.log("Error: " + err.message);
})
// // );
// // req.write('{"challenge_id":"1","language":"Node.js","code":"const https = require(\'https\');\r
// //    console.log(`statusCode: ${resp.statusCode}`);
// //    resp.on('data', (d) => {
// //       process.stdout.write(d);
// //    }
// //    );
// // }
// // );
// // req.on('error', (error) => {
// //    console.error(error);
// // }
// // );
// // https.get('https://coderbyte.com/api/challenges/json/age-counting', (respp) => {
// //    let data = '';
// //    respp.on('data', (chunk) => {
// //       data += chunk;
// //    }
// //    );
// //    respp.on('end', () => {
// //       console.log(JSON.parse(data).explanation);
// //    }
// //    );
// // }
// // ).on("error", (err) => {
// //    console.log("Error: " + err.message);
// // }
// // );
// const https = require('https');

// https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
//   let data = '';

  
//   //console.log(resp);

// });
// // // //use charset=utf-8
// // // respp.on('data', (chunk) => {
// // //    data += chunk;
// // // }
// // // );
// // // // count how many items exist that have an age equal to 32.
// // // respp.on('end', () => {
// // //        let json = JSON.parse(data);
// // //          let count = 0;
// // //          let output = '';
// // //          json.data.split(',').forEach((item) => {
// // //             if (item.includes('age=32')) {
// // //                count++;
// // //             }
// // //             output += item.split('=')[1] + ' ';
// // //          });
// // //          console.log(count);
// // //          console.log(output);
// // //       }
// // //       );
// // // }).on("error", (err) => {
// // // console.log("Error: " + err.message);
// // // }
// // // );
// // //    let arr = json.data.split(', ');
// // //    let count = 0;
// // //    let temp = "";
// // //    let tempArray = [];
// // //    for(let i = 0; i < arr.length; i++){
// // // if(arr[i].includes("age=32")){
// // // temp = arr[i].split('=')[1];
// // // tempArray.push(temp);
// // // count++;
// // // }
// // // for(let j = 0; j < tempArray.length; j++){
// // // console.log(tempArray[j]);
// // // }}
// // //    console.log(count);
// // //       // Then you should create a write stream to a file called output.txt
// // //      const fs = require('fs');
// // //      const crypto = require('crypto');
// // //      const hash = crypto.createHash('sha1');
// // //      const outputStream = fs.createWriteStream('output.txt');
// // //      for(let i = 0; i < arr.length; i++){
// // //            let key = arr[i].split('=')[1];
// // //            outputStream.write(key + 'age=32');
// // //         }
// // //      outputStream.end();
// // //      const input = fs.createReadStream('output.txt');
// // //      input.on('readable', () => {
// // //            const data = input.read();
// // //            if (data)
// // //                  hash.update(data);
// // //            else {
// // //                  console.log(hash.digest('hex'));
// // //            }
// // //      }
// // //      );
// // // }
// // // );
// // // }
// // // ).on("error", (err) => {
// // // console.log("Error: " + err.message);
// // // }
// // );
const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  let data = '';


  
  //console.log(resp);

});