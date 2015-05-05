var fs = require('fs');
var path = require('path');
var faker= require('faker');

var users = [];
var countUsers = 2000;

for(i = countUsers; i > 0; i--){
  users.push(generateUserProfile());
};

fs.writeFile(path.resolve(__dirname, 'db.json'), JSON.stringify({ users: users }), function() {
  console.log('data set generated successfully!');
});

function generateUserProfile() {
  return {
    name: faker.name.findName(),
    login: faker.internet.userName(),
    email: faker.internet.email(),
    city: faker.address.city(),
    country: faker.address.country(),
    birthday: faker.date.between(new Date(1940, 1, 1), new Date())
  };
}
