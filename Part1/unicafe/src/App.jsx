import { useState } from 'react'

const Button= (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text} 
    </button>
  )
}

const App = () => {
  const [valueGood, setValueGood] = useState(0)
  const [valueNeutral, setValueNeutral] = useState(0)
  const [valueBad, setValueBad] = useState(0)

  const newValueGood = () => {
    setValueGood(valueGood + 1)
  }
  const newValueNeutral = () => {
    setValueNeutral(valueNeutral + 1)
  }
  const newValueBad = () => {
    setValueBad(valueBad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={newValueGood} text="good" />
      <Button handleClick={newValueNeutral} text="neutral" />
      <Button handleClick={newValueBad} text="bad" />
      <h1>statistics</h1>
      <p>good {valueGood}</p>
      <p>neutral {valueNeutral}</p>
      <p>bad {valueBad}</p>
    </div>
  )
}

export default App
