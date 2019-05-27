import React from 'react';
import styled from 'styled-components';

const StyledDataTable = styled.div``;

const StyledTableHeader = styled.div``;

const StyledTableRow = styled.div``;

const TableHeader = (props) => {
  return (
    <StyledTableHeader>
    </StyledTableHeader>
  );
};

const TableRows = (props) => {
  return (
    <StyledTableRow>
    </StyledTableRow>
  );
};

const dataTable = (props) => {
  return (
    <StyledDataTable>
      <TableHeader />
      <TableRows />
    </StyledDataTable>
  );
};

export default dataTable;
