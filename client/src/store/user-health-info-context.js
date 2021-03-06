import React, { createContext, useState } from 'react'; // createContext를 불러온다.

//하나의 Context를 생성합니다.
export const UserHealthInfoContext = createContext({
    state: { kcal: 0, carb: 0, protein: 0, fat: 0, salt: 0 },
    actions: {
        setKcal: () => { },
        setCarb: () => { },
        setProtein: () => { },
        setFat: () => { },
        setSalt: () => { }
    }
});


const UserHealthInfoProvider = ({ children }) => {
    const [kcal, setKcal] = useState(0); // 유저 1일 권장 칼로리
    const [carb, setCarb] = useState(0); // 유저 1일 권장 탄수화물
    const [protein, setProtein] = useState(0); // 유저 1일 권장 단백질
    const [fat, setFat] = useState(0); // 유저 1일 권장 지방
    const [salt, setSalt] = useState(0); // 유저 1일 권장 나트륨


    const value = {
        state: { kcal, carb, protein, fat, salt },
        actions: { setKcal, setCarb, setProtein, setFat, setSalt }
    };

    sessionStorage.setItem('kcal', kcal);
    sessionStorage.setItem('carb', carb);
    sessionStorage.setItem('protein', protein);
    sessionStorage.setItem('fat', fat);
    sessionStorage.setItem('salt', salt);


    /**
     * UserHealthStore.Provider : Provider는 구독(하위 Component)하고 있는 자식 Component에게 정보를 보내준다는 설정
     * value={UserHealthInfo} : 자식 Component에게 값을 전달하기 위한 설정
     * {props.children} : 자식 Component를 랜더링 하기위해 설정
     */
    return (
        <UserHealthInfoContext.Provider value={value}>{children}</UserHealthInfoContext.Provider>
    );
};

const { Consumer: UserHealthInfoConsumer } = UserHealthInfoContext;

export { UserHealthInfoProvider, UserHealthInfoConsumer };

export default UserHealthInfoContext;