import { PublicKey, createMessage, encrypt, readKey } from 'openpgp';

interface Params {
  armoredPublicKey: string
  text: string
}

export const encryptMessage = async (params: Params): Promise<string> => {
  const publicKey = await readKey({ armoredKey: params.armoredPublicKey });

  const encryptedMessage = await encrypt({
    message: await createMessage({ text: params.text }),
    encryptionKeys: publicKey,
    format: 'armored'
  });

  return encryptedMessage as string
}