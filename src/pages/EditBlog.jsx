import { Dialog } from "primereact/dialog";
import React from "react";
import { AddEditForm } from "../components/AddEditForm";
import { useDispatch } from "react-redux";
import { setClickedBlog } from "../features/blogs/blogSlice";

const EditBlog = ({ showEdit, setShowEdit, id }) => {
  const dispatch = useDispatch();

  const onClose = () => {
    setShowEdit(false);
    dispatch(setClickedBlog({}));
  };

  return (
    <Dialog
      header="Edit Post"
      visible={showEdit}
      style={{ width: "50vw" }}
      onHide={() => {
        onClose();
      }}
    >
      <AddEditForm add={false} id={id} setVisible={onClose} />
    </Dialog>
  );
};

export default EditBlog;
