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

            이름 <input name ='name' placeholder='이름' onChange={({target: { value }}) => actions.setName(value)} />
            <button name='button' onClick={onClick}>이동</button> 
          </>
        )
      }
    </UserInfoConsumer>
   </>
  )
}

export default UserForm;

// const UserForm = () => {
//   return (
//     <UserInfoConsumer>
//       {({ actions }) =>
//         (
//           <>
            
//             <h3>{userHealthContext.calorie}</h3>


//             이름 <input name ='name' placeholder='이름' onChange={({target: { value }}) => actions.setName(value)} />
//             성별 <input name ='gender' placeholder='성별' onChange={({target: { value }}) => actions.setGender(value)} />
//             나이 <input name ='age' placeholder='나이' onChange={({target: { value }}) => actions.setAge(value)} />
//             칼로리 <input name ='calorie' placeholder='칼로리' onChange={({target: { value }}) => userHealthContext.setCalorie(value)} />
//           </>
//         )
//       }

//     </UserInfoConsumer>
//   )
// }



/*
const context = useContext(UserInfoContext)

  return (
   <>
    <h2>유저 폼 context api 테스트</h2>
    <UserInfoConsumer>
      {({ actions }) => (
        <>
          <h3>{context.name}</h3>
          이름
          <input 
            name ='name'
            placeholder='이름'
            onChange={({target: { value }}) => actions.setName(value)}
            onContextMenu={(e, {target: { value }}) => {
              e.preventDefault();
              actions.setName({value});
          }}/>
        </>
      )}
    </UserInfoConsumer>
   </>
  )
*/