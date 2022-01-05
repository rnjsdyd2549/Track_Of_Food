import React, { createContext, useState } from 'react'; // createContext를 불러온다.

//하나의 Context를 생성합니다.
export const UserInfoContextStore = createContext();

/**
 * Context를 생성할 때 기본 값을 세팅한다. 
 * React에서는 값을 컨트롤 할 때는 Component를 만들어 사용하는걸 지향한다.
 *
 * **/
const UserInfoContext = (props) => {

    const [ name, setName ] = useState('홍길동'); // 유저 이름
    const [ gender, setGender ] = useState('남자'); // 유저 성별
    const [ age, setAge ] = useState(0); // 유저 나이
    const [ location, setLocation ] = useState('강남구'); // 유저 위치
    const [ height, setHeight ] = useState(0); // 유저 키
    const [ weight, setWeight ] = useState(0); // 유저 몸무게
    const [ activity, setActivity ] = useState('많이 활동함'); // 유저 활동량

    //유저 정보를 하나의 객체로 만들어준다.
    const UserInfo = {
        name,
        setName,
        gender,
        setGender,
        age, 
        setAge,
        location,
        setLocation,
        height,
        setHeight,
        weight,
        setWeight,
        activity,
        setActivity
    }

    /**
     * UserInfoContextStore.Provider : Provider는 구독(하위 Component)하고 있는 자식 Component에게 정보를 보내준다는 설정
     * value={UserInfo} : 자식 Component에게 값을 전달하기 위한 설정
     * {props.children} : 자식 Component를 랜더링 하기위해 설정
     */
    return (
        <UserInfoContextStore.Provider value={UserInfo}>
            {props.children}
        </UserInfoContextStore.Provider>
    );
};

export default UserInfoContext;