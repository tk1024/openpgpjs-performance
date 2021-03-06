import * as openpgp from 'openpgp';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '../components/Form';
import { Header } from '../components/Header';
import { Result } from '../components/Result';
import { TestInProgress } from '../components/TestInProgress';
import { PGPPerformanceTest } from '../pgp-process/pgpPerformanceTest';
import { ResultByCipher, STATUS } from '../types';

const ellipticCurveNameList: openpgp.EllipticCurveName[] = ['ed25519', 'curve25519', 'p256', 'p384', 'p521', 'secp256k1', 'brainpoolP256r1', 'brainpoolP384r1', 'brainpoolP512r1']

const genEmptyResult = (): ResultByCipher => ({
  ed25519: [],
  curve25519: [],
  p256: [],
  p384: [],
  p521: [],
  secp256k1: [],
  brainpoolP256r1: [],
  brainpoolP384r1: [],
  brainpoolP512r1: [],
})

export default function Home() {
  const [status, setStatus] = useState<STATUS>(STATUS.INIT)
  const [result, setResult] = useState<ResultByCipher>(genEmptyResult())
  const queue = useRef<[openpgp.EllipticCurveName, string][]>([])

  const handleSubmit = useCallback((message: string, numberOfTrials: number) => {
    startTest(message, numberOfTrials)
  }, [])

  const startTest = useCallback((message, numberOfTrials) => {
    for (const ellipticCurveName of ellipticCurveNameList) {
      for (let i = 1; i <= numberOfTrials; i++) {
        queue.current.push([ellipticCurveName, message])
      }
    }

    setStatus(STATUS.IN_PROGRESS)
    setResult(genEmptyResult())
  }, [queue])

  const endTest = useCallback(() => {
    setStatus(STATUS.RESULT)
  }, [])

  useEffect(() => {
    if (queue.current.length > 0) {
      (async () => {
        const [name, message] = queue.current.shift()
        const r = await PGPPerformanceTest(name, message)
        setResult(current => {
          current[name].push(r)
          return { ...current }
        })
        if (queue.current.length === 0) {
          endTest()
        }
      })()
    }
  }, [queue.current.length])

  if (status === STATUS.INIT) {
    return (
      <>
        <Header status={status} />
        <Form onSubmit={handleSubmit} />
      </>
    )
  }

  if (status === STATUS.IN_PROGRESS) {
    return (
      <>
        <Header status={status} />
        <TestInProgress result={result} />
      </>
    )
  }

  if (status === STATUS.RESULT) {
    return (
      <>
        <Header status={status} />
        <Result result={result} />
      </>
    )
  }

  return null
}