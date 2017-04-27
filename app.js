var fs = require('fs');
var scanText;
var volumes =[];
var volumeStartIndexes = [];

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
          console.log(startIndex);
        }
    }
    return volumeStartIndexes;
};

getVolumeStartIndexes()
//console.log(scanText[4]);
getVolumes();
//console.log(volumes);
