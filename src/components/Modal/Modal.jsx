import { useState } from "react";
import Form from "../Form/Form";
import style from "./Modal.module.css";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1>User Details Modal</h1>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Form
      </button>
      {isOpen && (
        <div className={style.modal} onClick={() => setIsOpen(false)}>
          <div
            className={style.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Form />
          </div>
        </div>
      )}
    </>
  );
}
