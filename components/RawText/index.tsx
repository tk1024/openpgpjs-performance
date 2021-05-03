import { Box, Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode
  title: string
  children: ReactNode
}

const useStyles = makeStyles({
  codeFont: {
    fontSize: 10
  },
});

export const RawTextWithTitleCard = (props: Props) => {
  const classes = useStyles();

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
          <pre className={classes.codeFont}>
            <code>{props.children}</code>
          </pre>
        </CardContent>
      </Card>
    </Box>
  )
}