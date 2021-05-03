import { Box, Paper } from '@material-ui/core';
import * as openpgp from 'openpgp';
import { ResultByCipher } from "../../types"

interface Props {
  result: ResultByCipher
}

export const TestInProgress = (props: Props) => {
  return (
    <Paper>
      <Box p={3}>
        <div>Test in progress...</div>
        {(Object.keys(props.result) as openpgp.EllipticCurveName[]).map((name) => {
          return <div key={name}>{name}: {props.result[name].length} times</div>
        })}
      </Box>
    </Paper>
  )
}