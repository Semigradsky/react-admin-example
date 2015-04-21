var React = require('react');
var Griddle = require('griddle-react');

var users = [
  {
    id: 1,
    firstName: 'Allah',
    lastName: 'Akbar',
    ageBirth: new Date(Date.parse('1/1/1990')).toISOString(),
    img: 'https://avatars1.githubusercontent.com/u/1198848?v=3&s=460'
  },
  {
    id: 2,
    firstName: 'Dmitry',
    lastName: 'Semigradsky',
    ageBirth: new Date(Date.parse('9/3/1990')).toISOString(),
    img: 'https://avatars1.githubusercontent.com/u/1198848?v=3&s=460'
  },
  {
    id: 3,
    firstName: 'B',
    lastName: 'C',
    ageBirth: new Date(Date.parse('3/10/1995')).toISOString(),
    img: 'https://avatars1.githubusercontent.com/u/1198848?v=3&s=460'
  }
];

var UserList = React.createClass({

  render: function () {
    return (
      <Griddle
        results={users}/>
    );
  }

});

module.exports = UserList;
