'use strict';
const assert = require('assert');
const fs = require('fs');
const fileRead = require('../lib/readFile.js');
const bitMapBuffer = require('../lib/bitMapImage.js');

// const Transform = require('stream').Transform;


//checks to see if it can read the file buffer
describe('it reads the buffer', () => {
  it('the buffer gets read', done => {
    fileRead.readBuffer('non-palette-bitmap.bmp', (buffer) => {
      assert(buffer instanceof Buffer);
      done();
    });
  });
  
  it('the file is written', done => {
    fileRead.readBuffer('non-palette-bitmap.bmp', (buffer) => {
      bitMapBuffer.transformImage(buffer, bitMapBuffer.getHeader(buffer), () => {
        console.log(buffer);
        fileRead.createNewImage('transformedBitMap.bmp', buffer, () => {
          assert.ok(fs.existsSync('./transformedBitMap.bmp'));
          done();
        });
      });
    });
  });
  //check to see if we can read header

});
