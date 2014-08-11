# themeleon-jade

> [Jade] mixin for [Themeleon].

[Jade]: http://jade-lang.com
[Themeleon]: https://github.com/themeleon/themeleon


## Usage

In your `package.json`

```json
{
  ...

  "dependencies": {
    ...

    "themeleon": "0.*",
    "themeleon-jade": "0.*"
  }
}
```

In yout theme `index.js`

```js
var themeleon = require('themeleon')(); // Create a theme

themeleon.use('jade'); // Tell the theme to use the `jade` extension

// Themeleon needs to know the theme directory, hence `__dirname`
module.exports = themeleon(__dirname, function (t) {
  t.copy('assets'); // Copy `assets` in destination directory
  // t.copy('assets', 'foo'); // Other name in destination directory

  var options = {
    pretty: true
  };

  // Compile a Jade view as `index.html` in destination directory
  t.jade('views/index.jade', 'index.html', options);
});
```

SassDoc documentation: [Using Your Own Theme](https://github.com/SassDoc/sassdoc/wiki/Using-Your-Own-Theme)  
Jade documentation: [API](http://jade-lang.com/api)
