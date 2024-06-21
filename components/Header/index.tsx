import { Box } from '@mui/material';
import { STATUS } from "../../types"
import { LinearStepper } from "../LinearStepper"

interface Props {
  status: STATUS
}

export const Header = (props: Props) => {
  return (
    <Box my={3}>
      <LinearStepper status={props.status} />
    </Box>
  )
}