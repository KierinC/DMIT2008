import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';


const BooksTable = (props) => {
  let books = Object.values(props.authorBooks.entries)

  return <TableContainer component={Paper}>
  <Table>
  <TableHead>
      <TableRow>
      <TableCell>Books in all Languages</TableCell>
      </TableRow>
  </TableHead>
  <TableBody>
      {books.map((book) => {
        return <TableRow>
          <TableCell>
            {book.title}
          </TableCell>
        </TableRow>
      })}
  </TableBody>
  </Table>
</TableContainer>
}
export { BooksTable }