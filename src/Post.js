import React from 'react'
import { useParams } from 'react-router-dom'

export default function Post() {

 const paremas =   useParams()
  return (
    <div>{paremas.postId}</div>
  )
}
