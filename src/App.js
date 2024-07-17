import Results from './components/Results'
import Header from './components/Header'
import UserInput from './components/UserInput'
import { useState } from 'react';


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment:1000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
  })

  const inputIsValid = userInput.duration >= 1;

  function handleChange(userIndentifier,newValue) {
    setUserInput((prevUserInput)=>{
      return{
        ...prevUserInput,
         [userIndentifier]: +newValue
      }
      
    })
  }

  return (
    <div className="App">
      <Header/>
      <UserInput onChange={handleChange} userInput={userInput}/>
       {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </div>
  );
}

export default App;
