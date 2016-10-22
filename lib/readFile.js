const fileRead = {};
const fs = require('fs');


fileRead.readBuffer = function(path, cb) {
  fs.readFile(path, (err, data) => {
    if(err) cb(err);
    console.log('buffer', data);
    cb(data);
  });
};

fileRead.createNewImage = function(fileName, data, cb) {
  fs.writeFile(fileName, data, (err) => {
    if(err) cb(err);
    console.log('we wrote the file');
    cb();
  });
};

module.exports = fileRead;
