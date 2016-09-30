#Express Request summary#

An express middleware that logs a summary of every request to the server.
Requires body-parser middleware to be declared above this middleware.

```js
  var express = require('express');
  var bp = require('body-parser');
  var express_request_summary = require('express-request-summary');
  var app = express();
  
  app.use(bodyParser.json());
  app.use(express_request_summary);

  //further code here
```
