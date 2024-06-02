import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import { BlogTable } from "../components/BlogTable";

const Dashboard = ({ visible, setVisible }) => {
  return (
    <MainLayout visible={visible} setVisible={setVisible}>
      <BlogTable />
    </MainLayout>
  );
};

export default Dashboard;
