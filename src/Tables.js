import styled from 'styled-components';

/* Table component */
const Table = styled.table`
  width: ${props => props.full ? '100%' : ''};
  box-sizing: ${props => props.full ? 'border-box' : ''};
  border-spacing: 0;
  border-collapse: collapse;
  margin-bottom: 2.5rem;
`;

/* Table header component */
const Th = styled.th`
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #E1E1E1;

  :first-child {
    padding-left: 0;
  }
  :last-child {
    padding-right: 0;
  }
`;

/* Table data component */
const Td = styled.td`
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #E1E1E1;

  :first-child {
    padding-left: 0;
  }
  :last-child {
    padding-right: 0;
  }
`;

export { Table, Th, Td };
