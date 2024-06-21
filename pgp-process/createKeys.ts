import { generateKey, EllipticCurveName, KeyPair } from 'openpgp';

export const createECCKeys = async (ecn: EllipticCurveName) => {
  const keys = await generateKey({
    type: "ecc",
    curve: ecn,
    userIDs: [{
      name: 'Example',
      email: 'example@example.com'
    }]
  });

  return keys
}