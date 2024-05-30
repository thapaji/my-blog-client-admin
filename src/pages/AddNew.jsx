import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { AddEditForm } from "../components/AddEditForm";

const AddNew = ({ visible, setVisible }) => {
  const footerContent = (
    <div>
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
    </div>
  );

  return (
    <Dialog
      header="Header"
      visible={visible}
      style={{ width: "50vw" }}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      footer={footerContent}
    >
      <AddEditForm />
    </Dialog>
  );
};

export default AddNew;
