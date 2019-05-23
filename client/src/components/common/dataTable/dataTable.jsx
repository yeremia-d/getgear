import React from 'react';
import TableRow from './dataTableRow';

const DataTable = (props) => {
  const rows = props.data.map((data) => <TableRow data={data} />);

  return (
    <div>
      <TableRow data={props.fields} isHeader="true" />
      {rows}
    </div>
  );
};

export default DataTable;
