const fs = require('fs');
const $ = require('jquery');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const chai = require('chai')
const assert = chai.assert;

describe('all module tests', () => {
  describe('module 1 tests', () =>  {
    let dom;
    before ((done) => {
      fs.readFile('./index.html', 'utf8', (err, data) => {
        if (err) { console.log(err); throw err; }
        // todo: what happens if file doesn't exist?
        // maybe have a test?
        // todo: use jquery
        dom = new JSDOM(data);
        done();
      });
    });
    it('title exists in head and contents some text @title-exists-and-is-non-zero', () =>  {
      let title_dom = dom.window.document.querySelector('head > title');
      assert(title_dom !== null, 'title tag does not exist');
      assert(title_dom.textContent.trim().length >= 1, 'title has no text');
    });
  });
});
