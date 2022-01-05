// import { useTabContext } from "@mui/material";
import React, { useContext } from "react";
import { UserInfoContextStore } from "../../store/user-info-context";

const UserForm = () => {
  const context = useContext(UserInfoContextStore);
  console.log(context);

  return (
    <>
      <h3>{context.name}</h3>
      <input name ='test' />
    </>
  )
}

export default UserForm;