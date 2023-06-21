import React from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { first } from './action/userAction';

export default function User() {

    const dat = useSelector(y=>y.user);

    const dis = useDispatch();

    console.log(dat);

    useEffect(()=> {

        fetch("https://jsonplaceholder.typicode.com/users").then(y=>y.json())
        .then(y=> {

            dis(first(y))

        })

    },[])

    
  return (
    <div>User</div>
  )
}
