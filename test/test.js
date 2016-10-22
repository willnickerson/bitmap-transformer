'use strict';
const assert = require('chai').assert;
const fs = require('fs');
const fileSystem = require('../lib/fileSystem.js');
const imageTransform = require('../lib/imageTransform.js');


describe('transforms the bitmap and writes a new file', () => {
  //deletes existing transformed bitmap file
  it('deletes the existing transformed file', done => {
    fileSystem.deleteFile('./transformedBitMap.bmp', () => {
      assert.isNotOk(fs.existsSync('./transformedBitMap.bmp'));
      done();
    });
  });
  //checks to see if it can read the file buffer
  it('the buffer gets read', done => {
    fileSystem.readBuffer('non-palette-bitmap.bmp', (buffer) => {
      assert(buffer instanceof Buffer);
      done();
    });
  });

  //we know from bmp file documentation that the 10th offset dec in the header gives us the position where the pixels start, we need to make sure this returns an integer
  it('grabs the proper header information', done => {
    fileSystem.readBuffer('non-palette-bitmap.bmp', (buffer) => {
      assert(Number.isInteger(imageTransform.getHeader(buffer)));
      done();
    });
  });

  //we know that to invert a given rgb value we subtract it from 255
  it('properly transforms each pixel', done => {
    fileSystem.readBuffer('non-palette-bitmap.bmp', buffer => {
      var originalBuffer = [];
      for(var i = 0; i < buffer.length; i++) {
        originalBuffer.push(buffer[i]);
      }
      imageTransform.transformImage(buffer, imageTransform.getHeader(buffer), () => {
        for(var i = imageTransform.getHeader(buffer); i < buffer.length; i++) {
          assert.deepEqual(255 - originalBuffer[i], buffer[i]);
        }
        done();
      });
    });
  });

  //checks to see if we successfully create a file
  it('the file is written', done => {
    fileSystem.readBuffer('non-palette-bitmap.bmp', (buffer) => {
      imageTransform.transformImage(buffer, imageTransform.getHeader(buffer), () => {
        console.log(buffer);
        fileSystem.createNewFile('transformedBitMap.bmp', buffer, () => {
          assert.ok(fs.existsSync('./transformedBitMap.bmp'));
          done();
        });
      });
    });
  });
});
