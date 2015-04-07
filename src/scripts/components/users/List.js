var React = require('react');
var Reactable = require('reactable');

var Table = Reactable.Table;
var Tr = Reactable.Tr;
var Td = Reactable.Td;

var defaultSort = { column: 'Name', direction: 'desc' };

var columns = [
  'Image',
  'Name',
  'Birthday',
  { key: 'Options', label: '' }
];

var UserList = React.createClass({
  render: function () {
    var rows = this.props.users.map(function (x) {
      var name = x.firstName + ' ' + x.lastName;
      return (
        <Tr key={x.id}>
          <Td column='Image'>
            <img src={x.img} alt={name} />
          </Td>
          <Td column='Name'>
            {name}
          </Td>
          <Td column='Birthday'>
            {x.ageBirth}
          </Td>
          <Td column='Options'>
            {x.id}
          </Td>
        </Tr>
      )
    });
    
    return (
      <Table 
        sortable={['Name', 'Birthday']}
        defaultSort={defaultSort}
        columns={columns}>
        {rows}
      </Table>
    );
  }
  
});

module.exports = UserList;