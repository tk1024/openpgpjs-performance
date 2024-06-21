import { Box, Button, Paper, TextField, Typography, styled } from '@mui/material';
import React, { ChangeEvent, useCallback, useState, FormEvent } from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { blue, grey } from '@mui/material/colors';


interface Props {
  onSubmit: (value: string, numberOfTrials: number) => void
}

const Textarea = styled(TextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);


export const Form = (props: Props) => {
  const [value, setValue] = useState<string>("")
  const [numberOfTrials, setNumberOfTrials] = useState<number>(3)

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    props.onSubmit(value, numberOfTrials)
  }
  const handleChange = useCallback((ev: ChangeEvent<HTMLTextAreaElement>) => setValue(ev.target.value), [])

  return (
    <Box mt={3}>
      <Paper>
        <Box p={3}>
          <Box my={3}>
            <Typography variant="h6">Measure how long it takes to encrypt text in the browser using openpgp.js</Typography>
            <Typography variant="body1" mt={1}>Supported Elliptic curve</Typography>
            <ul style={{ listStyle: "inside" }}>
              <li>ed25519</li>
              <li>curve25519</li>
              <li>p256</li>
              <li>p384</li>
              <li>p521</li>
              <li>secp256k1</li>
              <li>brainpoolP256r1</li>
              <li>brainpoolP384r1</li>
              <li>brainpoolP512r1</li>
            </ul>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box my={3}>
              <Textarea value={value} onChange={handleChange} minRows={6} />
            </Box>
            <TextField variant="outlined" label="number of trials" type="number" value={numberOfTrials} onChange={ev => setNumberOfTrials(parseInt(ev.target.value))} />
            <Box mt={3}>
              <Button variant="contained" color="primary" type="submit">Test</Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Box>
  )
}