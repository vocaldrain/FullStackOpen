import { useState } from 'react'

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
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0,4:0,5:0,6:0,7:0 })

  
  const nextAnecdotes = () => setSelected(getRandomInt(0, anecdotes.length - 1));

  const vote = () => {
    const copy = { ...points }
    copy[selected] += 1
    setPoints(copy)
  }

  const mostVotedAnecdote = () => {
    const keys = Object.keys(points);
    let max = keys[0];
    keys.forEach((key) => {
      if (points[key] > points[max]) {
        max = key;
      }
    });
    return anecdotes[max];
  };

  return (
    <div>
      <h1>Ancedote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      <Button handleClick={vote} text='vote' />
      <Button handleClick={nextAnecdotes} text='next anecdote'/>
      <h1>Ancedote with the most votes</h1>
      {mostVotedAnecdote()}
    </div>
  )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



export default App