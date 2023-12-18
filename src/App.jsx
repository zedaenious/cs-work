// import { useState } from 'react'
import itemData from '../data/item-data'
// import MasterCheckbox from '/components/MasterCheckbox'
// import CheckboxCounter from '/components/CheckboxCounter'
import ListItem from './components/list-item'
import './styles/reset.css'
import './App.css'

function App() {
  const itemList = itemData.map((item, index) => {
    return (
      <ListItem data={item} key={`item-${index}`} />
    )
  });

  return (
    <>
      <ul>
        {itemList}
      </ul>
    </>
  )
}

export default App
