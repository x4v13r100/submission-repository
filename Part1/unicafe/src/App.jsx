import { useState } from 'react'

const ShowStatistics = (props) => {
  if (props.valueGood === 0 && props.valueNeutral === 0 && props.valueBad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
    return (
      <Statistics valueGood={props.valueGood} valueNeutral={props.valueNeutral} valueBad={props.valueBad} />
    )
  }
}

const Button= (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text} 
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <StatisticLine text="good" value={props.valueGood} />
      <StatisticLine text="neutral" value={props.valueNeutral} />
      <StatisticLine text="bad" value={props.valueBad} />
      <StatisticLine text="all" value={props.valueGood + props.valueNeutral + props.valueBad} />
      <StatisticLine text="average" value={(props.valueGood - props.valueBad) / (props.valueGood + props.valueNeutral + props.valueBad)} />
      <StatisticLine text="positive" value={(props.valueGood / (props.valueGood + props.valueNeutral + props.valueBad)) * 100} />
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
      <ShowStatistics valueGood={valueGood} valueNeutral={valueNeutral} valueBad={valueBad}/>
    </div>
  )
}

export default App
