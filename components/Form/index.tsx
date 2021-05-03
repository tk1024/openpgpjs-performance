import { Box, Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, useCallback, useState, FormEvent } from 'react';

interface Props {
  onSubmit: (value: string, numberOfTrials: number) => void
}

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
          <Box pb={3}>
            <Typography variant="h6">Encrypt the input text with each cipher (ed25519, curve25519, p256, p384, p521, secp256k1, brainpoolP256r1, brainpoolP384r1, brainpoolP512r1) to measure the performance of openpgp.js in a browser.</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <textarea value={value} onChange={handleChange} style={{ width: "100%", padding: "8px" }} rows={6} />
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