import React, { createContext, useState } from 'react'; // createContext를 불러온다.

//하나의 Context를 생성합니다.
export const UserHealthStore = createContext();

/**
 * Context를 생성할 때 기본 값을 세팅한다. 
 * React에서는 값을 컨트롤 할 때는 Component를 만들어 사용하는걸 지향한다.
 *
 * **/
const UserHealthInfoContext = (props) => {

    const [ calorie, setCalorie ] = useState(1000); // 유저 1일 권장 칼로리
    const [ calbo, setCalbo ] = useState(0); // 유저 1일 권장 탄수화물
    const [ protein, setProtein ] = useState(0); // 유저 1일 권장 단백질
    const [ fat, setFat ] = useState(0); // 유저 1일 권장 지방
    const [ salt, setSalt ] = useState(0); // 유저 1일 권장 나트륨

    //유저 정보를 하나의 객체로 만들어준다.
    const UserHealthInfo = {
        calorie,
        setCalorie,
        calbo,
        setCalbo,
        protein,
        setProtein,
        fat,
        setFat,
        salt,
        setSalt
    }

    /**
     * UserHealthStore.Provider : Provider는 구독(하위 Component)하고 있는 자식 Component에게 정보를 보내준다는 설정
     * value={UserHealthInfo} : 자식 Component에게 값을 전달하기 위한 설정
     * {props.children} : 자식 Component를 랜더링 하기위해 설정
     */
    return (
        <UserHealthStore.Provider value={UserHealthInfo}>
            {props.children}
        </UserHealthStore.Provider>
    );
};

export default UserHealthInfoContext;