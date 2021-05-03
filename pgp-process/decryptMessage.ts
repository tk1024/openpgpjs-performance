import * as openpgp from 'openpgp';

interface Params {
  privateKeyArmored: string
  encryptedMessage: string
}

export const decryptMessage = async (params: Params): Promise<string> => {

  const privateKey = await openpgp.readKey({ armoredKey: params.privateKeyArmored })

  const message = await openpgp.readMessage({
    armoredMessage: params.encryptedMessage
  });
  
  const { data: decryptedMessage } = await openpgp.decrypt({
    message,
    privateKeys: privateKey
  });

  return decryptedMessage
}