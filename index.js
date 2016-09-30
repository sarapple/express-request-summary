module.exports = function(req, res, next) {
  var now, timestamp;

  console.log('\n\n<--- [START] summary of request to server! --->');

  now = new Date();
  timestamp = (now.getMonth() + 1) + '/' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes();

  console.log('\tTimestamp: ', timestamp);

  if (req.method && req.url) {
    console.log('\t   METHOD: ', req.method, '\n\t      URL: ', req.url);
  }

  if (req.body) {
    console.log('\t     BODY: ', req.body);
  }

  console.log('<--- [END] summary of request ----------------->\n');
  
  next();
}
