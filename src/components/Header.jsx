import LOGO from "../assets/investment-calculator-logo.png";

export default function Header() {
   return (
      <div id="header">
         <img src={LOGO} alt="investment calculator logo" />
         <h1>React Investment Calculator</h1>
      </div>
   );
}
