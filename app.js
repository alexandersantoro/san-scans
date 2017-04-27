var fs = require('fs');
var scanText;
var volumes =[];
var volumeStartIndexes = [];
var avidStartIndex = 0;
var avidEndIndex = 0;

scanText = fs.readFileSync('/Users/danger/Documents/DaemonScans/scan.txt', 'utf8').toString().split("\n");


function getVolumeNames(){
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

function getVolumeStartIndexes(){
  var startIndex = 0;
  var scanLength = scanText.length;
  var scanData = scanText[0];
  scanData.substring(0, 3);
    for (var i = 0; i < scanLength; i++){
      var findData = scanText[i];
        if(findData.substring(0, 3) === "Mon"){
          startIndex = i + 4;
          volumeStartIndexes.push(startIndex);
          //console.log(startIndex);
        }
    }
    return volumeStartIndexes;
};

getVolumeStartIndexes()
getVolumeNames();

avidStartIndex = volumeStartIndexes[0];
avidEndIndex = volumeStartIndexes[1] - 3;

function avidJobs(){
  
};

//console.log(scanText[4]);
console.log(avidStartIndex);
console.log(avidEndIndex);
