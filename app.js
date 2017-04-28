var fs = require('fs');
var scanText;
var volumes =[];
var volumeStartIndexes = [];

var avidJobs = [];
var avidStartIndex = 0;
var avidEndIndex = 0;

var offlineJobs = [];
var offlineStartIndex = 0;
var offlineEndIndex = 0;

var cameraJobs = [];
var cameraStartIndex = 0;
var cameraEndIndex = 0;

var rawJobs = [];
var rawStartIndex = 0;
var rawEndIndex = 0;


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

getVolumeStartIndexes();
getVolumeNames();

avidStartIndex = volumeStartIndexes[0];
avidEndIndex = volumeStartIndexes[1] - 6;

function getAvidJobs(){
  while (avidStartIndex < avidEndIndex){
    avidJobs.push(scanText[avidStartIndex]);
    avidStartIndex++;
  }
  return avidJobs;
};

offlineStartIndex = volumeStartIndexes[1];
offlineEndIndex = volumeStartIndexes[2] - 6;

function getOfflineJobs(){
  while (offlineStartIndex < offlineEndIndex){
    offlineJobs.push(scanText[offlineStartIndex]);
    offlineStartIndex++;
  }
  return offlineJobs;
};

cameraStartIndex = volumeStartIndexes[2];
cameraEndIndex = volumeStartIndexes[3] - 6;

function getCameraJobs(){
  while (cameraStartIndex < cameraEndIndex){
    cameraJobs.push(scanText[cameraStartIndex]);
    cameraStartIndex++;
  }
  return cameraJobs;
};

rawStartIndex = volumeStartIndexes[3];
rawEndIndex = volumeStartIndexes[4] - 6;

function getRawJobs(){
  while (rawStartIndex < rawEndIndex){

    rawJobs.push(scanText[rawStartIndex]);
    rawStartIndex++;
  }
  return rawJobs;
};
//Jobs ON/OFF

//getAvidJobs();
//console.log(avidJobs);

//getOfflineJobs();
//console.log(getOfflineJobs());

//getCameraJobs();
//console.log(getCameraJobs());

getRawJobs();
console.log(getRawJobs());

//OLD DEBUG

//console.log(scanText[4]);
//console.log(getVolumeStartIndexes());
//console.log(avidStartIndex);
//console.log(avidEndIndex);
