import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { AddEditForm } from "../components/AddEditForm";

const AddNew = ({ visible, setVisible }) => {
  return (
    <Dialog
      header="Add New Post"
      visible={visible}
      style={{ width: "50vw" }}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
    >
      <AddEditForm />
    </Dialog>
  );
};

export default AddNew;
