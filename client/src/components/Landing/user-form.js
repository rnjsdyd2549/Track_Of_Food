import React from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoConsumer } from "../../store/user-info-context";
// import { UserHealthStore } from "../../store/user-health-info-context";

const UserForm = () => {
  let navigate = useNavigate();

  const onClick = () => {
    navigate('/select-food');
  }

  return (
    <>
      <h2>유저 폼 context api 테스트</h2>
      <UserInfoConsumer>
        {({ state, actions }) =>
        (
          <>
            <h3>데이터 유지 테스트</h3>
            <h3>이름 : {state.name}</h3>

            이름 <input name='name' placeholder='이름' onChange={({ target: { value } }) => actions.setName(value)} />
            <button name='button' onClick={onClick}>이동</button>
          </>
        )
        }
      </UserInfoConsumer>
    </>
  )
}

export default UserForm;
