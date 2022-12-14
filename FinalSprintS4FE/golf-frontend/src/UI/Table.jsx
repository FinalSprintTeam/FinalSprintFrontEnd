import Table from 'react-bootstrap/Table';

function TableMembers({nameHeader, scoreHeader, name, score}) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>{nameHeader}</th>
          <th>{scoreHeader}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{score}</td>
        </tr>       
      </tbody>
    </Table>
  );
}

export default TableMembers;