import { useState } from "react";

const DEFAULT_USER_INPUT = {
   initialInvestment: 10000,
   annualInvestment: 1000,
   expectedReturn: 7,
   duration: 10,
}

export default function UserInput() {
   
   const [userInput, setUserInput] = useState(DEFAULT_USER_INPUT);

   function handleInputChange(inputIdentifier, inputValue) {
      setUserInput({
         ...userInput,
         [inputIdentifier]: inputValue, // * Dynamically update the property using the value of inputIdentifier
      });
   }

   return (
      <section id="user-input">
         <div className="input-group">
            <p>
               <label>Initial Investment:</label>
               <input 
                  type="number" 
                  required 
                  onChange={(e) => handleInputChange('initialInvestment', e.target.value)}
                  value={userInput.initialInvestment}
               />
            </p>
            <p>
               <label>Annual Investment:</label>
               <input 
                  type="number" 
                  required 
                  onChange={(e) => handleInputChange('annualInvestment', e.target.value)}
                  value={userInput.annualInvestment}
               />
            </p>
         </div>
         <div className="input-group">
            <p>
               <label>Expected Return:</label>
               <input 
                  type="number" 
                  required 
                  onChange={(e) => handleInputChange('expectedReturn', e.target.value)}
                  value={userInput.expectedReturn}
               />
            </p>
            <p>
               <label>Duration:</label>
               <input 
                  type="number" 
                  required 
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  value={userInput.duration}
               />
            </p>
         </div>
      </section>
   );
}
