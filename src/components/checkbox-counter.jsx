export default function CheckboxCounter(props) {
  const number = props.count === 0 ? 'None': props.count;
  
  return (
    <>
      <div>{number} Selected</div>
    </>
  )
}