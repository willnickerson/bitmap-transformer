![cf](http://i.imgur.com/7v5ASc8.png) Bitmap Transformer
====


## Description

For this assignment you will be building a Bitmap reader and transformer. 
It will read a Bitmap in from disk, run one or more color transforms on the bitmap 
and then write it out to a new file. 
This project will require the use of node `Buffer` in order to manipulate binary data. 

The process will look something like this:

1. Open file using fs and read it into a buffer
2. Read the "header" information to get the needed info (you might encapsulate this into an object)
3. Run a transform on the buffer based on the header information and the transform you are applying
4. Write the buffer to a new file. 

The wikipedia article found here [Bitmap Specification](https://en.wikipedia.org/wiki/BMP_file_format) 
describes the byte specification of a "windows bitmap file.":
* We'll be working the simplest version, meaning no compression
* The sample files fit "perfectly" in terms of byte size per row
* Your project should include at least one transform. 

This can be a difficult assignment so make sure to raise questions early. 

Ideas for easy transformations:

* Invert the colors (essentially subtract every color value from the max color value which is 255),
* Grayscale the colors, multiply each color value by a constant, just make sure your values don't go over 255.
* (red|green|blue)scale the colors, same as above but only multiply one of the colors.

Tests:

* You may want to use "pinning" or "snapshot" tests for testing overall transformed bitmap
* Be thoughtful about what to test (and what not to test!)

### Rubric:
* Tests: 3pts
* npm scripts/package.json 2pts
* Read Bitmap Meta Data 5pts
* Successfully Apply Transform 5pts
* Project Design 5pts

## Stretch Ideas For More Fun:

* improve your "API" for interfacing with the transformer
* handle palette and non-palette bitmaps
* can handle various sized bitmaps (handle padded rows for non-palette bitmaps)
* create a command line interface
