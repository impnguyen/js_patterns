# Javascript patterns and sample implementations
This repository shows a set of sample javascript pattern implementations. It should act as a reference book for pattern implementations, so you can clone the sample easily to adapt it for your necessisties.

## contents
1. [revealing module pattern](https://github.com/impnguyen/js_patterns/blob/master/README.md#revealing-module-pattern)



## revealing module pattern
The revealing module pattern enables a packaged module with control of accessability. So you can define which method or object is private or public. You can also define an alias name for the internal/private methods or objects, which is the API for the user of your module.

```javascript
var module = (function() {
    // private members
    var aObjects = [];

    // private methods
    function addObject(object) {
        aObjects.push(object);
    }

    // public api
    return {
        addMyObject: addObject
    };
})();

module.exports = module;
```
