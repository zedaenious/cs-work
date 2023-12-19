// import './styles/reset.css'
import './styles/App.css'
import itemData from '../data/item-data'
import { useState, useEffect } from 'react'
import TableRow from './components/table-row'
import CheckboxCounter from './components/checkbox-counter'

function App() {
  /* STATE */
  const [counter, setCounter] = useState(0);

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

  function onButtonClickHandler() {
    const tableRows = document.querySelectorAll('table tbody tr');
    const available = [];
    let msg = 'Devices & Path for available items:\n\n';
    
    tableRows.forEach((tr) => {
      const cbox = tr.querySelector('input');
      
      if(!cbox.checked) {
        return;
      }

      const cboxData = tr.dataset;

      if(cboxData.status === 'available') {
        msg += `Device: ${cboxData.device} \nPath: ${cboxData.path}\n\n`
      }
    });

    alert(msg);
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

  /* JSX */
  return (
    <>
      <div id="controls">
        <input
          type="checkbox"
          id="master-checkbox"
          name="master-checkbox"
          onClick={onMasterClickHandler}
        />
        <CheckboxCounter count={counter} />
        <button
          onClick={onButtonClickHandler}
          disabled={counter === 0}
        >Download Selected</button>
      </div>
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
