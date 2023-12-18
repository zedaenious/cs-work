import {useState, useEffect} from 'react'

export default function TableRow(props) {
  const onClickHandler = (e) => {
    const checked = e.target.checked;

    if(checked) {
      props.incrementHandler();
    } else {
      props.decrementHandler();
    }
  }

  return (
    <>
      <tr>
        <td><input
          type="checkbox"
          onClick={onClickHandler}
        /></td>
        <td>{props.data.name}</td>
        <td>{props.data.device}</td>
        <td>{props.data.path}</td>
        <td>{props.data.status}</td>
      </tr>
    </>
  )
}