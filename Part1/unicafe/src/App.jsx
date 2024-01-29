import { useState } from 'react'

const Button= (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text} 
    </button>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <p>good {props.valueGood}</p>
      <p>neutral {props.valueNeutral}</p>
      <p>bad {props.valueBad}</p>
      <p>all {props.valueGood + props.valueNeutral + props.valueBad}</p>
      <p>average {(props.valueGood - props.valueBad) / (props.valueGood + props.valueNeutral + props.valueBad)}</p>
      <p>positive {(props.valueGood / (props.valueGood + props.valueNeutral + props.valueBad)) * 100}%</p>
    </div>
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
      <Statistics valueGood={valueGood} valueNeutral={valueNeutral} valueBad={valueBad}/>
    </div>
  )
}

export default App
