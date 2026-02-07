import { useState } from "react";
import Form from "../Form/Form";
import "./Modal.css";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1>User Details Modal</h1>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Form
      </button>
      {isOpen && (
        <div className={"modal"} onClick={() => setIsOpen(false)}>
          <div className={"modal-content"} onClick={(e) => e.stopPropagation()}>
            <Form />
          </div>
        </div>
      )}
    </>
  );
}
