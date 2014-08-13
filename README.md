Themeleon Jade
==============

> [Jade] mixin for [Themeleon].

[Jade]: http://jade-lang.com
[Themeleon]: https://github.com/themeleon/themeleon

Installation
------------

In your `package.json`:

```json
{
  "dependencies": {
    "themeleon": "1.*",
    "themeleon-jade": "1.*"
  }
}
```

Usage
-----

```js
var themeleon = require('themeleon')();

// Use the Jade mixin
themeleon.use('jade');

// Or inject your own instance
themeleon.use('jade', require('jade'));

module.exports = themeleon(__dirname, function (t) {
  var options = {
    pretty: true,
  };

  // Compile a Jade view as `index.html` in destination directory
  t.jade('views/index.jade', 'index.html', options);
});
```
