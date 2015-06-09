var fs = require('fs');
var path = require('path');
var jsf = require('json-schema-faker');
var userSchema = require('./user.schema.json');

var users = [];
var countUsers = 2000;

while (countUsers > 0) {
  countUsers--;
  // https://github.com/pateketrueke/json-schema-faker/issues/42
  users.push(jsf(userSchema));
}

fs.writeFile(path.resolve(__dirname, 'db.json'), JSON.stringify({ users: users }, null, 4), function() {
  console.log('data set generated successfully!');
});
