// import { useTabContext } from "@mui/material";
import React, { useContext } from "react";
import { UserInfoContextStore } from "../../store/user-info-context";
import { UserHealthStore } from "../../store/user-health-info-context";

const UserForm = () => {
  const userInfoContext = useContext(UserInfoContextStore);
  const userHealthContext = useContext(UserHealthStore);

  return (
    <>
      <h3>{userInfoContext.name}</h3>
      <h3>{userInfoContext.gender}</h3>
      <h3>{userInfoContext.age}</h3>

      <h3>{userHealthContext.calorie}</h3>

      {/* <h4>{context.setAge(context.age+2)}</h4> */}
      이름 <input name ='name' placeholder='이름' onChange={({target: { value }}) => userInfoContext.setName(value)} />
      성별 <input name ='gender' placeholder='성별' onChange={({target: { value }}) => userInfoContext.setGender(value)} />
      나이 <input name ='age' placeholder='나이' onChange={({target: { value }}) => userInfoContext.setAge(value)} />
      칼로리 <input name ='calorie' placeholder='칼로리' onChange={({target: { value }}) => userHealthContext.setCalorie(value)} />
    </>
  )
}

export default UserForm;