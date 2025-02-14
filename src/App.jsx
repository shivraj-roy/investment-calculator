import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const DEFAULT_USER_INPUT = {
   initialInvestment: 10000,
   annualInvestment: 1000,
   expectedReturn: 7,
   duration: 10,
};

function App() {
   const [userInput, setUserInput] = useState(DEFAULT_USER_INPUT);
   const inputIsValid =
      userInput.duration >= 1 &&
      userInput.initialInvestment >= 1 &&
      userInput.annualInvestment >= 1 &&
      userInput.expectedReturn >= 1;

   function handleInputChange(inputIdentifier, inputValue) {
      setUserInput({
         ...userInput,
         [inputIdentifier]: +inputValue, // * Dynamically update the property using the value of inputIdentifier
         // * Convert the inputValue to a number using the unary plus operator to avoid concatenation...
         // * Shorthand way to convert a string to a number in JavaScript...
      });
   }
   return (
      <>
         <Header />
         <UserInput
            onChangeInput={handleInputChange}
            userInputValue={userInput}
         />
         {inputIsValid ? (
            <Result userInputValue={userInput} />
         ) : (
            <p className="center">Please enter a valid input...</p>
         )}
      </>
   );
}

export default App;
