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

const Statistics = ({good,bad,neutral}) => {
   const all = good + neutral + bad;

   if(all==0){
    return(
      <p>No Feedback Given</p>
    )
   }


  return (
    <>
      <h1>Statistics</h1>
      <table>
      <tbody>
      
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={(good - bad) / (good + neutral + bad)} />
      <StatisticLine text='positive' value={good / (good + neutral + bad) * 100 + ' %'} />
      </tbody>

      </table>
    </>
  )
}
const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>


export default App




