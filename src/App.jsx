import { useState } from 'react'
import itemData from '../data/item-data'
// import MasterCheckbox from './components/MasterCheckbox'
import CheckboxCounter from './components/checkbox-counter'
import TableRow from './components/table-row'
import './styles/reset.css'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1)
  };

  function decrementCounter() {
    setCounter(counter - 1)
  };
  
  const tableRows = itemData.map((item, index) => {
    return (
      <TableRow
        data={item}
        key={`item-${index}`}
        incrementHandler={incrementCounter}
        decrementHandler={decrementCounter}
      />
    )
  });

  return (
    <>
      <CheckboxCounter count={counter}/>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Device</th>
            <th>Path</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </>
  )
}

export default App
