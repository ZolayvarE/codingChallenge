const request = require('request');
const fs = require('fs');
const path = require('path');

let data = [];
let stringifiedData = fs.readFileSync(path.join(__dirname, './data.txt'), 'utf8');

var saveData = function (dataString) {
  fs.writeFile(path.join(__dirname, './data.txt'), dataString, 'utf8', function (err) {
    if (err) {
      console.log(err);
    }
  });

  data = JSON.parse(dataString);
};

var requestData = function () {
  request('https://data.sfgov.org/resource/6a9r-agq8.json', function (err, res, body) {
    if (err) {
      console.log(err);
    } else {
      saveData(body);
    }
  });
};

var getData = function () {
  if (Array.isArray(data) && data.length) {
    return data;
  } else if (stringifiedData) {
    data = JSON.parse(stringifiedData);
    return data;
  } else {
    requestData();
    setTimeout(getData, 250);
  }
};

var getStringifiedData = function () {
  return stringifiedData;
};

getData();


module.exports = {
  getData: getData,
  getStringifiedData: getStringifiedData
};



