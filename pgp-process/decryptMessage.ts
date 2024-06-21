import { decrypt, readMessage, readPrivateKey } from 'openpgp';

interface Params {
  armoredPrivateKey: string
  encryptedMessage: string
}

export const decryptMessage = async (params: Params): Promise<string> => {
  const privateKey = await readPrivateKey({
    armoredKey: params.armoredPrivateKey
  })

  const message = await readMessage({
    armoredMessage: params.encryptedMessage
  });

  const { data } = await decrypt({
    message,
    decryptionKeys: privateKey
  });

  return data as string
}