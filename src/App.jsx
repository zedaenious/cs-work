import { useState } from 'react'
import items from '../data/items.js'
import MasterCheckbox from '/components/MasterCheckbox.js'
import CheckboxCounter from '/components/CheckboxCounter.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const itemList = items.map((item, index) => {
    <Item data={item} key={`item-${index}`} />
  });

  return (
    <>
      <MasterCheckbox />
      <CheckboxCounter />
      <ul>
        {itemList}
      </ul>
    </>
  )
}

export default App
