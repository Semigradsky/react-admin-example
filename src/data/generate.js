var fs = require('fs');
var path = require('path');
var faker= require('faker');

var bigSet = [];

for(i = 200; i > 0; i--){
  bigSet.push(faker.helpers.userCard());
};

fs.writeFile(path.resolve(__dirname, './users.json'), JSON.stringify(bigSet), function() {
  console.log('data set generated successfully!');
});
