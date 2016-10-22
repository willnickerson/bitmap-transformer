var bitMapBuffer = {};

bitMapBuffer.getHeader = function(buffer) {
  return buffer.readInt8(10);
};

bitMapBuffer.transformImage = function(buffer, start, cb) {
  for(var i = start; i < buffer.length; i++) {
    buffer[i] = 255 - buffer[i];
  }
  cb();
};
module.exports = bitMapBuffer;
