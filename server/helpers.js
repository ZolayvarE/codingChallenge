const request = require('request');

var data = [];

// let dataString = fs.readFileSync(path.join(__dirname, './data.json'), 'utf8');

if (!dataString) {
  request('https://data.sfgov.org/resource/6a9r-agq8.json', function (err, res, body) {
    console.log(body);
  });
}

var data = JSON.parse(dataString);


var getData = function () {

};


module.exports = {
  getData: getData
};



