import React from "react";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { RiUserLine, RiMailLine, RiPhoneLine, RiMapPinLine } from "react-icons/ri";
import { Fieldset } from "primereact/fieldset";
import { Divider } from "primereact/divider";

export const UserInfo = () => {
  const user = {
    name: "Sujan Thapa",
    email: "a@a.com",
    phone: "0123456789",
    address: "Sydney, NSW, Australia",
    avatar: "https://primefaces.org/wp-content/uploads/2020/05/placeholder.png",
  };
  return (
    <Fieldset legend="Profile">
      <div className="flex flex-column md:flex-row">
        <div>
          <Avatar image={user.avatar} shape="circle" size="xlarge" className="p-mb-4" />
          <h2>{user.name}</h2>
          <p className="p-mb-3">
            <RiMailLine style={{ verticalAlign: "middle", marginRight: "8px" }} /> {user.email}
          </p>
          <p className="p-mb-3">
            <RiPhoneLine style={{ verticalAlign: "middle", marginRight: "8px" }} /> {user.phone}
          </p>
          <p className="p-mb-3">
            <RiMapPinLine style={{ verticalAlign: "middle", marginRight: "8px" }} /> {user.address}
          </p>
          <Button
            label="Edit Profile"
            icon={<RiUserLine />}
            className="p-button-rounded p-button-outlined"
          />
        </div>
        <div className="w-full md:w-2">
          <Divider layout="vertical" className="hidden md:flex"></Divider>
        </div>
        <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
          <h2>Project Ideas</h2>
          <ul>
            <li>Accounting Software</li>
            <li>Movie Suggestions</li>
            <li>Portfolio Admin</li>
            <li>Blog</li>
            <li>Rental System</li>
            <li>Ticketing system</li>
            <li>Charts library</li>
            <li>Suren Driving School</li>
            <li>Remittance</li>
          </ul>
        </div>
      </div>
    </Fieldset>
  );
};
