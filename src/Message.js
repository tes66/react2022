import React from 'react'

export default function Message(props) {
  return (
    <div>
      <h1>Это первое сообщение, {props.name}</h1>
    </div>
  )
}
