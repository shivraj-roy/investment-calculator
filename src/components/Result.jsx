import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Result({ userInputValue }) {
   const result = calculateInvestmentResults(userInputValue);
   const initialInvestment =
      result[0].valueEndOfYear -
      result[0].interest -
      result[0].annualInvestment;
   return (
      <table id="result">
         <thead>
            <tr>
               <th>Year</th>
               <th>Investment Capital</th>
               <th>Interest (year)</th>
               <th>Total Interest</th>
               <th>Final Amount</th>
            </tr>
         </thead>
         <tbody>
            {result.map((data, index) => {
               const totalInterest =
                  data.valueEndOfYear -
                  data.annualInvestment * data.year -
                  initialInvestment;
               const totalAmountInvested =
                  data.valueEndOfYear - initialInvestment;
               return (
                  <tr key={index}>
                     <td>{data.year}</td>
                     <td>{formatter.format(totalAmountInvested)}</td>
                     <td>{formatter.format(data.interest)}</td>
                     <td>{formatter.format(totalInterest)}</td>
                     <td>{formatter.format(data.valueEndOfYear)}</td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
}
