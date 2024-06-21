import { Box, Paper } from '@mui/material'
import { EllipticCurveName } from 'openpgp';
import { ResultByCipher } from "../../types"

interface Props {
  result: ResultByCipher
}

export const TestInProgress = (props: Props) => {
  return (
    <Paper>
      <Box p={3}>
        <div>Test in progress...</div>
        {(Object.keys(props.result) as Exclude<EllipticCurveName, 'secp256k1'>[]).map((name) => {
          return <div key={name}>{name}: {props.result[name].length} times</div>
        })}
      </Box>
    </Paper>
  )
}