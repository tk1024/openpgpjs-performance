import * as openpgp from 'openpgp';
import { ResultByCipher } from '../../types';
import { ResultItem } from './ResultItem';

interface Props {
  result: ResultByCipher
}

export const Result = (props: Props) => {
  const nameList = (Object.keys(props.result) as openpgp.EllipticCurveName[])
  return <>{nameList.map(name => <ResultItem name={name} resultList={props.result[name]} />)}</>
}