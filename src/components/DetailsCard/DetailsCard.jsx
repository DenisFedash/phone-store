import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, CardContent, CardMedia, Stack } from '@mui/material'
import {
  Image,
  LinkButton,
  NameText,
  Price,
  Section,
  Text,
  Title,
  TitleSpec,
} from './DetailsCard.styled'

export const DetailsCard = ({ phoneDetails }) => {
  const { id, title, img, price, company, info, specs } = phoneDetails
  return (
    <>
      <Title>{title}</Title>
      <Section>
        <Image style={{ flexGrow: 5 }}>
          <CardMedia
            component="img"
            image={img}
            alt={title}
            sx={{ maxWidth: 448 }}
          />
        </Image>
        <CardContent style={{ maxWidth: 400, padding: 0 }}>
          <Text>
            <NameText>Model:</NameText>
            {title}
          </Text>
          <Text>
            <NameText>Manufacturer:</NameText>
            {company}
          </Text>
          <Text>
            <NameText>Description:</NameText>
            {info}
          </Text>
          <Price>
            <NameText>Price:</NameText>${price}
          </Price>
          <Stack spacing={2} direction="row" justifyContent="center">
            <LinkButton to="/">
              <Button variant="contained" type="button">
                To Store
              </Button>
            </LinkButton>
            <Button variant="contained" type="button" color="secondary">
              Add To Cart
            </Button>
          </Stack>
        </CardContent>
      </Section>
      <CardContent>
        <TitleSpec>Specifications</TitleSpec>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  <strong>Body</strong>
                </TableCell>
                <TableCell component="td" scope="row">
                  {specs.body}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <strong>Display</strong>
                </TableCell>
                <TableCell component="td" scope="row">
                  {specs.display}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <strong>Platform</strong>
                </TableCell>
                <TableCell component="td" scope="row">
                  {specs.chipset}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <strong>Memory</strong>
                </TableCell>
                <TableCell component="td" scope="row">
                  {specs.memory}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <strong>Camera</strong>
                </TableCell>
                <TableCell component="td" scope="row">
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th">Main</TableCell>
                        <TableCell component="td">
                          {specs.camera.main}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th">Selfie</TableCell>
                        <TableCell component="td">
                          {specs.camera.selfie}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th">Features</TableCell>
                        <TableCell component="td">
                          {specs.camera.features}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <strong>Battery</strong>
                </TableCell>
                <TableCell component="td" scope="row">
                  {specs.battery}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <strong>Features</strong>
                </TableCell>
                <TableCell component="td" scope="row">
                  {specs.features}
                </TableCell>
              </TableRow>
            </TableBody>
            {/* <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter> */}
          </Table>
        </TableContainer>
      </CardContent>
    </>
  )
}
