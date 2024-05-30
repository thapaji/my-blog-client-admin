import React from "react";
import MainLayout from "../layout/MainLayout";
import { UserInfo } from "../components/UserInfo";

const Profile = ({ visible, setVisible }) => {
  return (
    <MainLayout visible={visible} setVisible={setVisible}>
        <UserInfo/>
    </MainLayout>
  );
};

export default Profile;
