import {useState, useEffect} from 'react'

export default function TableRow(props) {
  const indicatorClass = props.data.status === 'available' ? 'greenDot' : '';
  
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
      <tr
        data-status={props.data.status}
        data-path={props.data.path}
        data-device={props.data.device}
      >
        <td><input
          type="checkbox"
          onClick={onClickHandler}
        /></td>
        <td>{props.data.name}</td>
        <td>{props.data.device}</td>
        <td>{props.data.path}</td>
        <td><span className={indicatorClass}></span>{props.data.status}</td>
      </tr>
    </>
  )
}