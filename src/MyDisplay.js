import React from 'react'
import { useSearchParams } from 'react-router-dom';

export default function MyDisplay() {

    const [searchParams] = useSearchParams();
const code = searchParams.get('code'); // "testCode"

console.log(code);
  return (
    <div>MyDisplay</div>
  )
}
