import {useState, useEffect} from 'react'

export default function TableRow(props) {
  const [isChecked, setIsChecked] = useState(false);

  const onClickHandler = () => {
    setIsChecked(!isChecked);
  }

  useEffect(() => {
    if(isChecked) {
      props.incrementHandler();
    } else {
      props.decrementHandler();
    }
  }, [isChecked]);

  return (
    <>
      <tr>
        <td><input
          type="checkbox"
          onClick={onClickHandler}
          checked={isChecked}
        /></td>
        <td>{props.data.name}</td>
        <td>{props.data.device}</td>
        <td>{props.data.path}</td>
        <td>{props.data.status}</td>
      </tr>
    </>
  )
}