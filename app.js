var fs = require('fs');
var scanText;

scanText = fs.readFileSync('/Users/danger/Documents/DaemonScans/scan.txt', 'utf8').toString().split("\n");


function getDate(){
  var scanDate = scanText[0];
   //scanDate = scanDate.split(" ");
   scanDate.toString();
   return scanDate;
};

console.log(scanText[8]);
