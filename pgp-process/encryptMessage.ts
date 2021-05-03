import * as openpgp from 'openpgp';

interface Params {
  publicKeyArmored: string
  text: string
}

export const encryptMessage = async (params: Params): Promise<string> => {
  const publicKey = await openpgp.readKey({ armoredKey: params.publicKeyArmored });

  const encryptedMessage = await openpgp.encrypt({
    message: await openpgp.createMessage({ text: params.text }),
    publicKeys: publicKey
  });

  return encryptedMessage
}