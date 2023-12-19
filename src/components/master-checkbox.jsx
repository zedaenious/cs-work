export default function MasterCheckbox(props) {
  function onMasterClickHandler(e) {
    const el = e.target;
    console.log(el, el.checked, el.indeterminate);

    if(props.count === 0) {
      el.checked = false;
      el.indeterminate = false;
    }
    if(props.count > 0 && props.count < props.cboxCount.length) {
      el.checked = false;
      el.indeterminate = true;
    }
    if(props.count === props.cboxCount.length) {
      el.checked = true;
      el.indeterminate = false;
    }
  }

  return (
    <>
      <input
        type="checkbox"
        onClick={onMasterClickHandler}
        id="master-checkbox"
      />
    </>
  )
}