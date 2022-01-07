// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { useContext } from "react";
import { UserInfoConsumer } from "../store/user-info-context";
import { UserHealthInfoConsumer } from "../store/user-health-info-context";

const FoodPage = () => {


  return (
    <>
    
      <h3>음식 페이지</h3>
      {/* <h3>{userHealthContext.calorie}</h3> */}
      <UserInfoConsumer>
      {({state}) => (
        <>
          <h3>데이터 유지 테스트</h3>
          <h3>이름 : {state.name}</h3>
        </>
      )}
      </UserInfoConsumer>
    </>
  )
} 

export default FoodPage
