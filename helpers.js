var handlebars =  require('hbsfy/runtime');

handlebars.registerHelper('uc', function(str) {
  return str.toUpperCase();
});
