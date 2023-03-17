
import './App.css';
 import './Dropdown.js';
import Dropdown from './Dropdown.js';
function App() {
  // The below array contains the list of items to display the dropdown options
  const arr = ['India','Usa','Canada','America']
  return (
    // passing the array as a props to Dropdown Component
    < Dropdown listIteams = {arr} />
  );
}

export default App;
