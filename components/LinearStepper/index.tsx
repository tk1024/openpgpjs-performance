import { Box, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';
import { STATUS } from "../../types";

interface Props {
  status: STATUS
}

function getSteps() {
  return ['Enter a message', 'Test', 'Result'];
}

export const LinearStepper = (props: Props) => {
  const activeStep = props.status
  const steps = getSteps();

  return (
    <Box sx={{ width: "100%" }}>
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
    </Box>
  );
}