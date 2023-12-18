// import { useState } from 'react'
import itemData from '../data/item-data'
// import MasterCheckbox from '/components/MasterCheckbox'
// import CheckboxCounter from '/components/CheckboxCounter'
import TableRow from './components/table-row'
import './styles/reset.css'
import './App.css'

function App() {
  const tableRows = itemData.map((item, index) => {
    return (
      <TableRow data={item} key={`item-${index}`} />
    )
  });

  return (
    <>
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
