import { useState, useEffect } from 'react'
import itemData from '../data/item-data'
// import MasterCheckbox from './components/master-checkbox'
import CheckboxCounter from './components/checkbox-counter'
import TableRow from './components/table-row'
import './styles/reset.css'
import './App.css'

function App() {
  /* STATE */
  const [counter, setCounter] = useState(0);

  /* FUNCTIONS */
  function incrementCounter() {
    setCounter(counter + 1)
  };

  function decrementCounter() {
    setCounter(counter - 1)
  };

  function onMasterClickHandler() {
    const el = document.querySelector('#master-checkbox');
    const cboxes = document.querySelectorAll('tbody input');

    cboxes.forEach((cbox) => {
      cbox.checked = el.checked;
    });

    setCounter(el.checked ? itemData.length : 0);
  }

  /* EFFECTS */
  useEffect(() => {
    const el = document.querySelector('#master-checkbox');

    if(counter === 0) {
      el.checked = false;
      el.indeterminate = false;
    }
    if(counter > 0 && counter < itemData.length) {
      el.checked = false;
      el.indeterminate = true;
    }
    if(counter === itemData.length) {
      el.checked = true;
      el.indeterminate = false;
    }
  }, [counter])
  
  /* VARIABLES */
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

  /* JSX */
  return (
    <>
      <input
        type="checkbox"
        id="master-checkbox"
        name="master-checkbox"
        onClick={onMasterClickHandler}
      />
      <CheckboxCounter count={counter} />
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
