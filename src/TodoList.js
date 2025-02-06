import React, { useState } from 'react'

const TodoList = () => {

    const [list,setList] = useState([])
    const [input,setInput] = useState([""])

  return (
        <form type="text">list of items</form>
  )
}

export default TodoList