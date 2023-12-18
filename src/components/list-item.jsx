export default function ListItem(props) {
  return (
    <>
      <li>
        <div>checkbox</div>
        <div>{props.data.name}</div>
        <div>{props.data.device}</div>
        <div>{props.data.path}</div>
        <div>{props.data.status}</div>
      </li>
    </>
  )
}