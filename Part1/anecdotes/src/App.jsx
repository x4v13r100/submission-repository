import { useState } from 'react'

let points = [0, 0, 0, 0, 0, 0, 0, 0]

const Button = (props) => {
  return (
      <button onClick={props.buttonMain}>{props.name}</button>
  )
};

const Display = (props) => {
  return (
    <div>
      <h3>{props.viewAnecdotes}</h3>
      <p> has {props.viewVotes} votes</p>
    </div>
  )
}

const AnecdoteMostVoted = (props) => {
  return (
    <div>
      <h3>Anecdote with most votes</h3>
      <p>{props.mostVoted}</p>
      <p>has {props.votes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(0)

  //console.log(selected);
 
  const nextAnecdotes = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const copied = [...points]
  
  //console.log(copied);
  
  const anecdoteVoted = () => {
    //console.log(voted);
    setVoted(voted + 1)
    points[selected] += 1
  }

  return (
    <div>
      <Display viewAnecdotes={anecdotes[selected]}/>
      <Display viewVotes={copied[selected]}/>
      <Button buttonMain={anecdoteVoted} name="vote"/>
      <Button buttonMain={nextAnecdotes} name="next anecdote"/>
      <AnecdoteMostVoted mostVoted={anecdotes[copied.indexOf(Math.max(...copied))]} votes={Math.max(...copied)}/>
    </div>
  )
}

export default App
