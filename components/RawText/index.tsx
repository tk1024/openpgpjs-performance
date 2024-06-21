import { Box, Card, CardContent, Typography } from '@mui/material';
import { ReactNode } from "react";

interface Props {
  icon: ReactNode
  title: string
  children: ReactNode
}

export const RawTextWithTitleCard = (props: Props) => {
  return (
    <Box width={1} p={1}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            <Box display="flex" alignItems="center">
              <Box mr={1} display="flex" alignItems="center">{props.icon}</Box>
              {props.title}
            </Box>
          </Typography>
          <Typography sx={{ fontSize: 10 }} component={"pre"}>
            <code>{props.children}</code>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}