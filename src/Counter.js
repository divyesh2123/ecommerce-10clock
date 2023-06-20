import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment,Decrement, Reset } from './action/counterAction';

export default function Counter() {

  const count =  useSelector(y=>y);

  const dis = useDispatch();

  const inc = ()=> {

    dis(Increment())
  }

  const dec = ()=> {

    dis(
        {type: 'DEC',
       
      })
  }

  const rs = ()=> {

    dis(Reset())

  }
  return (
    <div>
        
        {count}

        <button onClick={inc}>+</button>
        <button  onClick={dec}>-</button>
        <button onClick={rs}>Reset</button>
    </div>
  )
}
