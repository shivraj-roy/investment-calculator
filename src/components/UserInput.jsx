export default function UserInput({ onChangeInput, userInputValue }) {
   return (
      <section id="user-input">
         <div className="input-group">
            <p>
               <label>Initial Investment:</label>
               <input
                  type="number"
                  required
                  onChange={(e) =>
                     onChangeInput("initialInvestment", e.target.value)
                  }
                  value={userInputValue.initialInvestment}
               />
            </p>
            <p>
               <label>Annual Investment:</label>
               <input
                  type="number"
                  required
                  onChange={(e) =>
                     onChangeInput("annualInvestment", e.target.value)
                  }
                  value={userInputValue.annualInvestment}
               />
            </p>
         </div>
         <div className="input-group">
            <p>
               <label>Expected Return:</label>
               <input
                  type="number"
                  required
                  onChange={(e) =>
                     onChangeInput("expectedReturn", e.target.value)
                  }
                  value={userInputValue.expectedReturn}
               />
            </p>
            <p>
               <label>Duration:</label>
               <input
                  type="number"
                  required
                  onChange={(e) => onChangeInput("duration", e.target.value)}
                  value={userInputValue.duration}
               />
            </p>
         </div>
      </section>
   );
}
