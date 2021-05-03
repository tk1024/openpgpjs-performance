import * as openpgp from 'openpgp'

export type ResultByCipher = {
  [key in openpgp.EllipticCurveName]: Result[]
}

export type Result = {
  keys: openpgp.KeyPair
  encryptedMessage: string
  decryptedMessage: string
  performance: {
    encryption: number
    decryption: number
  }
}

export enum STATUS {
  INIT,
  IN_PROGRESS,
  RESULT,
}