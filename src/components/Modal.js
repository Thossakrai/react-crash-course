function Modal(props) {

    function handleConfirm() {
        props.onConfirmClick();
    }

    function handleCancel() {
        props.onCancelClick();
    }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn--alt" onClick={handleCancel}>Cancel</button>
      <button className="btn" onClick={handleConfirm}>Confirm</button>
    </div>
  );
}

export default Modal;
