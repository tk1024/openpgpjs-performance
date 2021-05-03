import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { STATUS } from "../../types";

interface Props {
  status: STATUS
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  }),
);

function getSteps() {
  return ['Enter a message to encrypt.', 'Test in progress', 'Result'];
}

export const LinearStepper = (props: Props) => {
  const classes = useStyles();
  const activeStep = props.status
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}