import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  //use State returns [current state, function to setNewState ]
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleDelete() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
      setModalIsOpen(false);
  }

  return (
    <div>
      <div className="card">
        <h2>{props.name}</h2>
        <div className="actions">
          <button className="btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
        {/* {modalIsOpen ? <Modal/> : null} */}
        {/* component funciton always true */}
        {modalIsOpen && (
          <Modal
            onCancelClick={closeModalHandler}
            onConfirmClick={closeModalHandler}
          />
        )}
        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      </div>
    </div>
  );
}

export default Todo;
