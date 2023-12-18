export default function TableRow(props) {
  return (
    <>
      <tr>
        <td><input type="checkbox" /></td>
        <td>{props.data.name}</td>
        <td>{props.data.device}</td>
        <td>{props.data.path}</td>
        <td>{props.data.status}</td>
      </tr>
    </>
  )
}