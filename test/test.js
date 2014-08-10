'use strict';

var fs = require('fs');
var path = require('path');
var test = require('tape');
var themeleon = require('themeleon')();
var jade = require('../');

themeleon.use(jade);

var options = {
  pretty: false
};

var context = {
  pageTitle: 'Hello'
};

var theme = themeleon(__dirname, function (t) {
  t.jade('fixture/index.jade', 'index.html', options);
});


test('themeleon-jade', function (assert) {
  assert.plan(2);

  function end () {
    var expected = fs.readFileSync(path.join(__dirname, 'fixture/index.html'), 'utf8');
    var input = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

    assert.ok(
      fs.existsSync(path.join(__dirname, 'index.html')),
      'Should create a `index.html` file'
    );

    assert.equal(input, expected);
  }

  theme(__dirname, context).then(end);

});
