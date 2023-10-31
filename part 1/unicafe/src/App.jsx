import { useState } from 'react'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => {  setGood(good + 1)}
const handleNeutralClick = () => {  setNeutral(neutral + 1)}
const handleBadClick = () => {setBad(bad + 1)}


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Statistics = (props) => {
  

  return (
    <>
      <h1>Statistics</h1>
      <table>
      <tbody>
     
      <StatisticLine text='good' value={props.good} />
      <StatisticLine text='neutral' value={props.neutral} />
      <StatisticLine text='bad' value={props.bad} />
      <StatisticLine text='all' value={props.good + props.neutral + props.bad} />
      <StatisticLine text='average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
      <StatisticLine text='positive' value={props.good / (props.good + props.neutral + props.bad) * 100 + ' %'} />
      </tbody>

      </table>
    </>
  )
}
const StatisticLine = ({ text, value }) => <tr><td>{text}</td>{value}</tr>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>


export default App




