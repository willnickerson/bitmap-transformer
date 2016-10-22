const fileSystem = {};
const fs = require('fs');

fileSystem.deleteFile = function(path, cb) {
  fs.unlink(path, () => {
    cb();
  });
};

fileSystem.readBuffer = function(path, cb) {
  fs.readFile(path, (err, data) => {
    if(err) cb(err);
    console.log('buffer', data);
    cb(data);
  });
};

fileSystem.createNewFile = function(fileName, data, cb) {
  fs.writeFile(fileName, data, (err) => {
    if(err) cb(err);
    console.log('we wrote the file');
    cb();
  });
};

module.exports = fileSystem;
