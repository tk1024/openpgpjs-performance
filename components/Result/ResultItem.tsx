import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Result } from '../../types';
import { Detail } from './Detail';

interface Props {
  name: string
  resultList: Result[]
}

const calcPerformanceData = (numList: number[]) => {
  return {
    avarage: numList.reduce((a, c) => a + c, 0) / numList.length,
    min: Math.min(...numList),
    max: Math.max(...numList),
  }
}

export const ResultItem = (props: Props) => {
  const { avarage: eAva, min: eMin, max: eMax } = calcPerformanceData(props.resultList.map(r => r.performance.encryption))
  const { avarage: dAva, min: dMin, max: dMax } = calcPerformanceData(props.resultList.map(r => r.performance.decryption))
  return (
    <Paper>
      <Box p={3} mt={3} mb={3}>
        <Typography variant="h4">{props.name}</Typography>

        <Box mt={3} mb={3}>
          <Paper elevation={1}>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Time</TableCell>
                    <TableCell align="right">Max</TableCell>
                    <TableCell align="right">Avarage</TableCell>
                    <TableCell align="right">Min</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">Encryption</TableCell>
                    {[Math.round(eMax), Math.round(eAva), Math.round(eMin)].map((num, i) => (
                      <TableCell key={i} align="right">{num} ms</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Decryption</TableCell>
                    {[Math.round(dMax), Math.round(dAva), Math.round(dMin)].map((num, i) => (
                      <TableCell key={i} align="right">{num} ms</TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>

        <Box mt={5}>
          <Typography variant="h6">Result Details</Typography>
          {props.resultList.map((r, i) => <Detail key={`${r}${i}`} result={r} index={i} />)}
        </Box>
      </Box>
    </Paper>
  )
}