import * as openpgp from 'openpgp'

export type ResultByCipher = {
  [key in Exclude<openpgp.EllipticCurveName, "secp256k1">]: Result[]
}

export type Result = {
  keys: openpgp.SerializedKeyPair<string> & {
    revocationCertificate: string;
  }
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