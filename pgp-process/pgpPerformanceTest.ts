import * as openpgp from 'openpgp';
import { Result } from '../types';
import { createECCKeys } from './createKeys';
import { decryptMessage } from './decryptMessage';
import { encryptMessage } from './encryptMessage';

export const PGPPerformanceTest = async (ellipticCurveName: openpgp.EllipticCurveName, message: string): Promise<Result> => {
  const keys = await createECCKeys(ellipticCurveName)

  const encryptStart = performance.now()
  const encryptedMessage = await encryptMessage({
    text: message,
    publicKeyArmored: keys.publicKeyArmored,
  })
  const encryptEnd = performance.now()

  const decryptStart = performance.now()
  const decryptedMessage = await decryptMessage({
    encryptedMessage,
    privateKeyArmored: keys.privateKeyArmored,
  })
  const decryptEnd = performance.now()

  return {
    keys,
    encryptedMessage,
    decryptedMessage,
    performance: {
      encryption: encryptEnd - encryptStart,
      decryption: decryptEnd - decryptStart,
    }
  }
}