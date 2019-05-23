import React from 'react';

/**
 * Data table row
 * @param {Object} props object that is passed to the functional component
 * @return {JSX}
 * Props has a field called data. Each data point
 * has a type and a value associated
 * Also another prop isHeader is set to true if the row is a header
 */
const TableRow = (props) => {
  const columns = props.data.map((data) => {
    return (<div className="{data.type}">{data.value}</div>);
  });

  return (
    <div>{columns}</div>
  );
};

export default TableRow;
