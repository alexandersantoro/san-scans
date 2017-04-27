var fs = require('fs');
var scanText;
var volumes =[];
var avidJobs = [];

scanText = fs.readFileSync('/Users/danger/Documents/DaemonScans/scan.txt', 'utf8').toString().split("\n");


function getVolumes(){
  var scanLength = scanText.length;
  var scanData = scanText[0];
  scanData.substring(0, 3);
    for (var i = 0; i < scanLength; i++){
      var findData = scanText[i];
        if(findData.substring(0, 3) === "Mon"){
//          console.log(i);
          i+=2;
//          console.log(i);
//          console.log(scanText[i]);
          volumes.push(scanText[i]);
        }

      }
      return volumes;
};

function getAvidJobs(){
  var scanLength = scanText.length;
  var scanData = scanText[0];
  scanData.substring(0, 3);
    for (var i = 0; i < scanLength; i++){
      var findData = scanText[i];
        if(findData.substring(0, 3) === "Mon"){
          var x = i + 4;
          //console.log(x);
          //console.log(scanText[13]);
        }
    }
};

getAvidJobs()
//console.log(scanText[4]);
//getVolumes();
//console.log(volumes);
