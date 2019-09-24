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

    it('An h1 exists in body and contains "Hello, Pluralsight!" @h1-exists-and-has-correct-text', () =>  {
      let h1_dom  = dom.window.document.querySelector('body > h1');
      assert(h1_dom !== null, 'h1 tag does not exist in body');
      assert(h1_dom.textContent.trim().match(/Hello,\s?Pluralsight!/) , 'contents aren\'t exactly "Hello, Pluralsight!"');
    });

    it('In body, a ul exists with 2 li elements @ul-exists-and-has-2-lis', () =>  {
      let ul_dom  = dom.window.document.querySelector('body > ul');
      let lis_dom  = dom.window.document.querySelectorAll('body > ul > li');

      assert(ul_dom !== null, 'there is no ul in body');
      assert(lis_dom && lis_dom.length >= 2, 'there aren\'t at least 2 lis');
      assert(lis_dom[0].textContent.trim().length > 0 &&
             lis_dom[1].textContent.trim().length > 0 
              , 'at least one of lis does not have some non-ws content');
    });

  });
});
