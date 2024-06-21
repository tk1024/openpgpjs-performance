import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCallback, useState } from 'react';
import { Result } from '../../types';
import { RawTextWithTitleCard } from '../RawText';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import MessageIcon from '@mui/icons-material/Message';
import HttpsIcon from '@mui/icons-material/Https';

interface Props {
  index: number
  result: Result
}

export const Detail = (props: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const toggle = useCallback(() => setExpanded(current => !current), [])

  return (
    <Accordion expanded={expanded}>
      <AccordionSummary onClick={toggle} expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle2">{props.index + 1}. Encryption: {Math.round(props.result.performance.encryption)}ms Decryption: {Math.round(props.result.performance.decryption)}ms</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {expanded && (
          <Box width={1}>
            <Box display="flex" width={1}>
              <RawTextWithTitleCard icon={<VpnKeyIcon />} title="private key">{props.result.keys.privateKey}</RawTextWithTitleCard>
              <RawTextWithTitleCard icon={<VpnKeyIcon />} title="public key">{props.result.keys.publicKey}</RawTextWithTitleCard>
            </Box>

            <Box display="flex" width={1}>
              <RawTextWithTitleCard icon={<HttpsIcon />} title="encrypted message">{props.result.encryptedMessage}</RawTextWithTitleCard>
              <RawTextWithTitleCard icon={<MessageIcon />} title="decrypted message">{props.result.decryptedMessage}</RawTextWithTitleCard>
            </Box>
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  )
}