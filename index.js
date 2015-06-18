require('./helpers.js');
var tpl = require('./tpl.hbs');

document.getElementById('content').innerHTML = tpl({ name: 'Steve'});
