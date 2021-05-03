import * as openpgp from 'openpgp';

export const createECCKeys = async (ecn: openpgp.EllipticCurveName): Promise<openpgp.KeyPair> => {
  const keys = await openpgp.generateKey({
    type: "ecc",
    curve: ecn,
    userIDs: [{
      name: 'Example',
      email: 'example@example.com'
    }]
  });
  return keys
}