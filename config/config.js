var path = require('path');

var root = path.join(__dirname, '..');

module.exports = {
  root: root,
  appRoot: path.join(root, 'app'),
  cookieSecret: 'node-boiler',
  mongo: {
    uri: 'mongodb://mongo/node-boiler'
  }
};
