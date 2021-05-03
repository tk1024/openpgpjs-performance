import { Box } from "@material-ui/core"
import { STATUS } from "../../types"
import { LinearStepper } from "../LinearStepper"

interface Props {
  status: STATUS
}

export const Header = (props: Props) => {
  return (
    <Box mb={3}>
      <LinearStepper status={props.status} />
    </Box>
  )
}