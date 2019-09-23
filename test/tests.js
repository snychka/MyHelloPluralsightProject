const fs = require('fs');
const $ = require('jquery');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
//const assert = require('assert');

describe('all module tests', () => {
  describe('module 1 tests', () =>  {
    let dom;
    before (() => {
      fs.readFile('./index.html', 'utf8', (err, data) => {
        console.log('here');
        if (err) { console.log(err); throw err; }
        // todo: what happens if file doesn't exist?
        // maybe have a test?
        console.log(data);
        dom = new JSDOM(data);
        console.log(dom.window.document.querySelector('head'));
      });
    });
    it('test description', () =>  {
      //assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
