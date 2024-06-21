import { EllipticCurveName } from 'openpgp';
import { ResultByCipher } from '../../types';
import { ResultItem } from './ResultItem';

interface Props {
  result: ResultByCipher
}

export const Result = (props: Props) => {
  const nameList = (Object.keys(props.result) as Exclude<EllipticCurveName, 'secp256k1'>[])
  return <>{nameList.map(name => <ResultItem key={name} name={name} resultList={props.result[name]} />)}</>
}