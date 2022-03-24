import React, { useState } from 'react'

const Input = ({creatText}) => {

    const [inputText, setInputText] = useState("");
    const onInputTextChange = (e) => {
        setInputText(e.target.value);
    }
    const onSubmit = () => {
        creatText(inputText)
        setInputText("")
    }
  return (
      <div>
          <input type="text" value={inputText} onChange={onInputTextChange} />
          <button onClick={onSubmit}>추가</button>
      </div>
  )
}

export default Input